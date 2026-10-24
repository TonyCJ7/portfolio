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

export function select<const O extends readonly string[]>(
  label: string,
  options: O,
  def: O[number],
): SelectControl<O> {
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

function attribute(key: string, value: string | true): string {
  if (value === true) {
    return key;
  }

  if (/^\d+$/.test(value)) {
    return `${key}={${value}}`;
  }

  return `${key}="${value}"`;
}

export function jsx(
  name: string,
  props: Record<string, ArgValue | undefined>,
  children?: string,
): string {
  const attrs = Object.entries(props)
    .filter(
      (pair): pair is [string, string | true] =>
        pair[1] !== undefined && pair[1] !== false && pair[1] !== "",
    )
    .map(([key, value]) => attribute(key, value));
  const open = [name, ...attrs].join(" ");

  if (children === undefined) {
    return `<${open} />`;
  }

  return `<${open}>${children}</${name}>`;
}
