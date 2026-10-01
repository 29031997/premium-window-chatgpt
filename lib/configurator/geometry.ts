import { COLORS } from "@/data/colors";
import type { WindowConfiguration } from "@/types/configurator";
import type { SvgHandle, SvgLine, SvgRect, WindowGeometry } from "@/types/geometry";

const MARGIN = 74;
const FRAME = 28;
const EXTENSION = 18;
const CONTENT_W = 860;
const CONTENT_H = 560;

function openingLines(id: string, x: number, y: number, w: number, h: number, mode: string): SvgLine[] {
  if (mode === "fixed") return [];
  const cx = x + w / 2;
  const cy = y + h / 2;
  const left = mode.includes("left");
  const right = mode.includes("right");
  const tilt = mode.includes("tilt");
  const lines: SvgLine[] = [];

  if (left || right) {
    const hingeX = left ? x : x + w;
    lines.push(
      { id: `${id}-a`, x1: hingeX, y1: y, x2: cx, y2: cy, kind: "opening" },
      { id: `${id}-b`, x1: hingeX, y1: y + h, x2: cx, y2: cy, kind: "opening" },
    );
  }
  if (tilt) {
    lines.push(
      { id: `${id}-c`, x1: x, y1: y, x2: cx, y2: cy, kind: "opening" },
      { id: `${id}-d`, x1: x + w, y1: y, x2: cx, y2: cy, kind: "opening" },
    );
  }
  return lines;
}

export function calculateWindowGeometry(configuration: WindowConfiguration): WindowGeometry {
  const ratio = Math.min(CONTENT_W / configuration.width, CONTENT_H / configuration.height);
  const outerWidth = configuration.width * ratio;
  const outerHeight = configuration.height * ratio;
  const x = MARGIN + (CONTENT_W - outerWidth) / 2;
  const y = MARGIN + (CONTENT_H - outerHeight) / 2;
  const innerX = x + FRAME;
  const innerY = y + FRAME;
  const innerWidth = Math.max(40, outerWidth - FRAME * 2);
  const innerHeight = Math.max(40, outerHeight - FRAME * 2);

  const outer: SvgRect = { id: "outer", x, y, width: outerWidth, height: outerHeight, kind: "frame" };
  const glass: SvgRect[] = [];
  const openings: SvgLine[] = [];
  const glazingBars: SvgLine[] = [];
  const handles: SvgHandle[] = [];
  const sections = [];

  let cursor = innerX;
  configuration.sections.forEach((section) => {
    const fraction = section.width / configuration.width;
    const sectionWidth = innerWidth * fraction;
    const gap = 7;
    const sx = cursor + gap / 2;
    const sw = Math.max(20, sectionWidth - gap);
    const rect: SvgRect = {
      id: `glass-${section.id}`,
      x: sx,
      y: innerY,
      width: sw,
      height: innerHeight,
      kind: section.finish === "infill" ? "infill" : "glass",
    };

    glass.push(rect);
    openings.push(...openingLines(section.id, rect.x, rect.y, rect.width, rect.height, section.opening));

    if (configuration.glazingBars) {
      glazingBars.push(
        { id: `bar-v-${section.id}`, x1: rect.x + rect.width / 2, y1: rect.y, x2: rect.x + rect.width / 2, y2: rect.y + rect.height, kind: "glazing-bar" },
        { id: `bar-h-${section.id}`, x1: rect.x, y1: rect.y + rect.height / 2, x2: rect.x + rect.width, y2: rect.y + rect.height / 2, kind: "glazing-bar" },
      );
    }

    const isLeft = section.opening.includes("left");
    const isRight = section.opening.includes("right");
    if (isLeft || isRight) {
      handles.push({
        id: `handle-${section.id}`,
        x: isLeft ? rect.x + rect.width - 11 : rect.x + 11,
        y: rect.y + rect.height / 2,
        side: isLeft ? "right" : "left",
      });
    }
    sections.push({ id: section.id, x: sx, width: sw, opening: section.opening, finish: section.finish });
    cursor += sectionWidth;
  });

  const extensions: SvgRect[] = [];
  if (configuration.extensions.top) extensions.push({ id: "ext-top", x, y: y - EXTENSION, width: outerWidth, height: EXTENSION, kind: "extension" });
  if (configuration.extensions.bottom) extensions.push({ id: "ext-bottom", x, y: y + outerHeight, width: outerWidth, height: EXTENSION, kind: "extension" });
  if (configuration.extensions.left) extensions.push({ id: "ext-left", x: x - EXTENSION, y, width: EXTENSION, height: outerHeight, kind: "extension" });
  if (configuration.extensions.right) extensions.push({ id: "ext-right", x: x + outerWidth, y, width: EXTENSION, height: outerHeight, kind: "extension" });

  return {
    viewBox: `0 0 ${CONTENT_W + MARGIN * 2} ${CONTENT_H + MARGIN * 2}`,
    outer,
    glass,
    extensions,
    openingLines: openings,
    glazingBars,
    handles,
    sections,
  };
}

export function windowFrameColor(configuration: WindowConfiguration) {
  return COLORS.find((color) => color.id === configuration.exteriorColorId)?.hex ?? "#3C403E";
}
