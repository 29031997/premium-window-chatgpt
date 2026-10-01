import type { CatalogOption } from "@/types/configurator";

export const OUTER_FRAMES: CatalogOption[] = ["A", "B", "C", "D"].map((type, index) => ({
  id: `frame-${type.toLowerCase()}`,
  name: `Тип ${type}`,
  description: "Вариант внешней рамы и монтажного узла.",
  image: `/assets/configurator/frames/type-${type.toLowerCase()}.webp`,
  priceDelta: index * 55,
}));

export const HANDLES: CatalogOption[] = [
  { id: "hoppe-toulon", name: "Hoppe Toulon", description: "Минималистичная алюминиевая ручка.", image: "/assets/configurator/handles/hoppe-toulon.webp", priceDelta: 0 },
  { id: "hoppe-toulon-lock", name: "Hoppe Toulon Lockable", description: "Ручка с замком.", image: "/assets/configurator/handles/hoppe-toulon-lockable.webp", priceDelta: 48 },
  { id: "secuforte", name: "Hoppe Toulon SecuForte", description: "Защита от смещения и взлома.", image: "/assets/configurator/handles/hoppe-toulon-secuforte.webp", priceDelta: 72 },
  { id: "new-york", name: "Hoppe New York", description: "Классическая форма.", image: "/assets/configurator/handles/hoppe-new-york.webp", priceDelta: 24 },
  { id: "new-york-lock", name: "New York Lockable", description: "Классическая ручка с замком.", image: "/assets/configurator/handles/new-york-lockable.webp", priceDelta: 64 },
];
