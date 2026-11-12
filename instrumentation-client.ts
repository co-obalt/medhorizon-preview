/**
 * Pre-hydration DOM sanitizer for browser extensions (e.g., Bitdefender /
 * Urban VPN / privacy shields) that inject `bis_skin_checked`, `bis_register`,
 * or `__processed_*` attributes onto SSR HTML before React hydrates.
 *
 * Next.js executes `instrumentation-client.ts` synchronously before application
 * hydration begins, allowing us to remove mismatched extension attributes while
 * leaving no lasting observer once hydration settles.
 */

const EXACT_EXTENSION_ATTRS = new Set(["bis_skin_checked", "bis_register"]);

function isExtensionAttr(name: string): boolean {
  return EXACT_EXTENSION_ATTRS.has(name) || name.startsWith("__processed_");
}

function cleanElementAttrs(
  el: Element,
  stripCounts: WeakMap<Element, number>,
): void {
  const count = stripCounts.get(el) ?? 0;
  if (count >= 4) return;

  let removed = false;
  const attrs = el.attributes;
  for (let i = attrs.length - 1; i >= 0; i--) {
    const name = attrs[i].name;
    if (isExtensionAttr(name)) {
      el.removeAttribute(name);
      removed = true;
    }
  }

  if (removed) {
    stripCounts.set(el, count + 1);
  }
}

function sweepDocument(stripCounts: WeakMap<Element, number>): void {
  const root = document.documentElement;
  if (!root) return;
  cleanElementAttrs(root, stripCounts);
  const all = root.querySelectorAll("*");
  for (let i = 0; i < all.length; i++) {
    cleanElementAttrs(all[i], stripCounts);
  }
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  const stripCounts = new WeakMap<Element, number>();

  // 1. Run synchronously before Next.js / React begins hydrateRoot().
  sweepDocument(stripCounts);

  // 2. Also sweep on DOMContentLoaded (in case a content script runs there)
  //    and observe attribute mutations briefly while hydration finishes.
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      () => sweepDocument(stripCounts),
      { capture: true, once: true },
    );
  }

  if (typeof MutationObserver !== "undefined" && document.documentElement) {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes" && mutation.attributeName) {
          if (
            isExtensionAttr(mutation.attributeName) &&
            mutation.target instanceof Element
          ) {
            cleanElementAttrs(mutation.target, stripCounts);
          }
        } else if (mutation.type === "childList") {
          for (const node of mutation.addedNodes) {
            if (node instanceof Element) {
              cleanElementAttrs(node, stripCounts);
              const nested = node.querySelectorAll("*");
              for (let i = 0; i < nested.length; i++) {
                cleanElementAttrs(nested[i], stripCounts);
              }
            }
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    const disconnectSoon = () => window.setTimeout(() => observer.disconnect(), 2500);
    if (document.readyState === "complete") {
      disconnectSoon();
    } else {
      window.addEventListener("load", disconnectSoon, { once: true });
      window.setTimeout(() => observer.disconnect(), 6000);
    }
  }
}

