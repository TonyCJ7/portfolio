import type {
  ArgValue,
  ControlDef,
  Controls,
  SelectControl,
  TextControl,
  ToggleControl,
  WorkshopEntry,
} from "@/types/workshop";

export const STATES = ["rest", "hover", "focus", "pressed"] as const;

export function select(
  label: string,
  options: readonly string[],
  def: string,
): SelectControl {
  return { kind: "select", label, options, default: def };
}

export function text(label: string, def: string, max: number): TextControl {
  return { kind: "text", label, default: def, max };
}

export function toggle(label: string, def: boolean): ToggleControl {
  return { kind: "toggle", label, default: def };
}

export function defineEntry<C extends Controls>(
  entry: WorkshopEntry<C>,
): WorkshopEntry {
  return entry as unknown as WorkshopEntry;
}

function coerceArg(control: ControlDef, raw: string | null): ArgValue {
  if (raw === null) {
    return control.default;
  }

  switch (control.kind) {
    case "select":
      return control.options.includes(raw) ? raw : control.default;

    case "text":
      return raw.slice(0, control.max);

    case "toggle":
      if (raw === "1") {
        return true;
      }

      if (raw === "0") {
        return false;
      }

      return control.default;
  }
}

export function coerceArgs(
  controls: Controls,
  params: URLSearchParams,
): Record<string, ArgValue> {
  return Object.fromEntries(
    Object.entries(controls).map(([key, control]) => [
      key,
      coerceArg(control, params.get(key)),
    ]),
  );
}

export function serializeArg(value: ArgValue): string {
  if (typeof value === "boolean") {
    return value ? "1" : "0";
  }

  return value;
}

export function jsx(
  name: string,
  props: Record<string, ArgValue | undefined>,
  children?: string,
): string {
  const attrs = Object.entries(props)
    .filter(([, value]) => value !== undefined && value !== false && value !== "")
    .map(([key, value]) => (value === true ? key : `${key}="${value}"`));
  const open = [name, ...attrs].join(" ");

  if (children === undefined) {
    return `<${open} />`;
  }

  return `<${open}>${children}</${name}>`;
}
