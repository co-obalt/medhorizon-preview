// The vendored Framer component imports a few authoring helpers from "framer".
// They only describe the component inside the Framer editor, so outside Framer
// they can be no-ops.

export const ControlType = {
  Array: "array",
  Boolean: "boolean",
  Color: "color",
  ComponentInstance: "componentInstance",
  Enum: "enum",
  Number: "number",
  Object: "object",
  String: "string",
} as const;

export function addPropertyControls() {
  // Editor metadata only.
}

export function useIsStaticRenderer() {
  return false;
}
