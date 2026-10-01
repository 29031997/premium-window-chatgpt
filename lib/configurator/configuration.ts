import type { WindowConfiguration, WindowSection } from "@/types/configurator";
import { WINDOW_TYPES } from "@/data/window-types";

function equalSections(count: number, total: number): WindowSection[] {
  const width = Math.round(total / count);
  return Array.from({ length: count }, (_, index) => ({
    id: `section-${index + 1}`,
    width: index === count - 1 ? total - width * (count - 1) : width,
    opening: index === 0 ? "tilt-turn-left" : index === count - 1 ? "tilt-turn-right" : "fixed",
    finish: "clear",
  }));
}

export const DEFAULT_CONFIGURATION: WindowConfiguration = {
  width: 2400,
  height: 1600,
  installationHeight: 900,
  windowTypeId: "three-sashes",
  profileId: "kommerling-88",
  interiorColorId: "ral-9001",
  exteriorColorId: "ral-7016",
  glazingId: "thermo-444",
  outerFrameId: "frame-a",
  handleId: "hoppe-toulon",
  handleColor: "black",
  warmEdge: true,
  glazingBars: false,
  alarmContact: false,
  installation: true,
  preDrilledHoles: false,
  extensions: { top: false, right: false, bottom: false, left: false },
  sections: equalSections(3, 2400),
  notes: "",
};

export function sectionsForWindowType(typeId: string, totalWidth: number) {
  const type = WINDOW_TYPES.find((item) => item.id === typeId) ?? WINDOW_TYPES[0];
  return equalSections(type.columns, totalWidth);
}

export function rebalanceSectionWidths(sections: WindowSection[], totalWidth: number) {
  const current = sections.reduce((sum, section) => sum + section.width, 0);
  if (!current) return sections;
  let consumed = 0;
  return sections.map((section, index) => {
    if (index === sections.length - 1) {
      return { ...section, width: Math.max(300, totalWidth - consumed) };
    }
    const width = Math.max(300, Math.round((section.width / current) * totalWidth));
    consumed += width;
    return { ...section, width };
  });
}
