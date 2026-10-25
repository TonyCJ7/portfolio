import type { ReactNode } from "react";

export type Scheme = "dark" | "light";

export type Device = "desktop" | "phone";

export type Motion = "full" | "reduced";

export type SelectControl<O extends readonly string[] = readonly string[]> = {
  kind: "select";
  label: string;
  options: O;
  default: O[number];
};

export type TextControl = {
  kind: "text";
  label: string;
  default: string;
  max: number;
};

export type ToggleControl = {
  kind: "toggle";
  label: string;
  default: boolean;
};

export type ControlDef = SelectControl | TextControl | ToggleControl;

export type Controls = Record<string, ControlDef>;

export type ArgValue = string | boolean;

export type Args<C extends Controls> = {
  [K in keyof C]: C[K] extends ToggleControl
    ? boolean
    : ToggleControl extends C[K]
      ? ArgValue
      : C[K] extends SelectControl<infer O>
        ? O[number]
        : string;
};

export type FrameContext = {
  scheme: Scheme;
  device: Device;
  motion: Motion;
};

export type Spec = {
  folder: string;
  props: string[];
  tokens: string[];
  motion: string[];
  a11y: string[];
  note?: string;
};

export type WorkshopEntry<C extends Controls = Controls> = {
  id: string;
  name: string;
  stage: 1 | 2 | 3;
  lede: string;
  center?: boolean;
  controls: C;
  spec: Spec;
  render: (args: Args<C>, ctx: FrameContext) => ReactNode;
  usage: (args: Args<C>, ctx: FrameContext) => string;
};

export type WorkshopState = {
  ctx: FrameContext;
  args: Record<string, ArgValue>;
  setArg: (key: string, value: ArgValue) => void;
  setCtx: (patch: Partial<FrameContext>) => void;
  reset: () => void;
};
