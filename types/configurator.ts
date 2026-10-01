export type OpeningMode = "fixed" | "tilt-turn-left" | "tilt-turn-right" | "tilt" | "turn-left" | "turn-right";
export type PaneFinish = "clear" | "frosted" | "infill";

export interface WindowSection {
  id: string;
  width: number;
  opening: OpeningMode;
  finish: PaneFinish;
}

export interface WindowConfiguration {
  width: number;
  height: number;
  installationHeight: number;
  windowTypeId: string;
  profileId: string;
  interiorColorId: string;
  exteriorColorId: string;
  glazingId: string;
  outerFrameId: string;
  handleId: string;
  handleColor: "silver" | "black" | "white" | "bronze";
  warmEdge: boolean;
  glazingBars: boolean;
  alarmContact: boolean;
  installation: boolean;
  preDrilledHoles: boolean;
  extensions: { top: boolean; right: boolean; bottom: boolean; left: boolean };
  sections: WindowSection[];
  notes: string;
}

export interface CatalogOption {
  id: string;
  name: string;
  description?: string;
  image?: string;
  priceDelta: number;
}

export interface WindowTypeOption extends CatalogOption {
  columns: number;
  topLight?: boolean;
  bottomLight?: boolean;
}

export interface PriceLine {
  id: string;
  label: string;
  amount: number;
}

export interface PriceResult {
  total: number;
  lines: PriceLine[];
}
