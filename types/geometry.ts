import type { OpeningMode, PaneFinish } from "@/types/configurator";

export interface SvgRect {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  kind: "frame" | "glass" | "extension" | "infill";
}

export interface SvgLine {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  kind: "opening" | "glazing-bar" | "dimension";
}

export interface SvgHandle {
  id: string;
  x: number;
  y: number;
  side: "left" | "right";
}

export interface SvgSectionGeometry {
  id: string;
  x: number;
  width: number;
  opening: OpeningMode;
  finish: PaneFinish;
}

export interface WindowGeometry {
  viewBox: string;
  outer: SvgRect;
  glass: SvgRect[];
  extensions: SvgRect[];
  openingLines: SvgLine[];
  glazingBars: SvgLine[];
  handles: SvgHandle[];
  sections: SvgSectionGeometry[];
}
