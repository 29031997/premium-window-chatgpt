import { WINDOW_TYPES } from "@/data/window-types";
import { PROFILES } from "@/data/profiles";
import { GLAZING } from "@/data/glazing";
import { HANDLES, OUTER_FRAMES } from "@/data/hardware";
import { COLORS } from "@/data/colors";
import type { PriceLine, PriceResult, WindowConfiguration } from "@/types/configurator";

const byId = <T extends { id: string }>(items: readonly T[], id: string) => items.find((item) => item.id === id);

export function calculateWindowPrice(configuration: WindowConfiguration): PriceResult {
  const area = (configuration.width * configuration.height) / 1_000_000;
  const base = Math.round(620 + area * 540);
  const lines: PriceLine[] = [{ id: "base", label: "Базовая конструкция", amount: base }];

  const add = (id: string, label: string, amount?: number) => {
    if (amount && amount > 0) lines.push({ id, label, amount });
  };

  add("type", byId(WINDOW_TYPES, configuration.windowTypeId)?.name ?? "Тип окна", byId(WINDOW_TYPES, configuration.windowTypeId)?.priceDelta);
  add("profile", byId(PROFILES, configuration.profileId)?.name ?? "Профиль", byId(PROFILES, configuration.profileId)?.priceDelta);
  add("glazing", byId(GLAZING, configuration.glazingId)?.name ?? "Стеклопакет", byId(GLAZING, configuration.glazingId)?.priceDelta);
  add("frame", byId(OUTER_FRAMES, configuration.outerFrameId)?.name ?? "Внешняя рама", byId(OUTER_FRAMES, configuration.outerFrameId)?.priceDelta);
  add("handle", byId(HANDLES, configuration.handleId)?.name ?? "Ручка", byId(HANDLES, configuration.handleId)?.priceDelta);
  add("inside-color", "Цвет внутри", byId(COLORS, configuration.interiorColorId)?.priceDelta);
  add("outside-color", "Цвет снаружи", byId(COLORS, configuration.exteriorColorId)?.priceDelta);
  add("warm-edge", "Тёплая рамка", configuration.warmEdge ? 65 : 0);
  add("bars", "Декоративные раскладки", configuration.glazingBars ? 145 : 0);
  add("alarm", "Магнитный контакт", configuration.alarmContact ? 85 : 0);
  add("extensions", "Доборы рамы", Object.values(configuration.extensions).filter(Boolean).length * 70);
  add("installation", "Монтаж", configuration.installation ? Math.round(220 + area * 145) : 0);
  add("holes", "Монтажные отверстия", configuration.preDrilledHoles ? 38 : 0);

  return { lines, total: lines.reduce((sum, line) => sum + line.amount, 0) };
}
