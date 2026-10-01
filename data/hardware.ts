import type { CatalogOption } from "@/types/configurator";

export const OUTER_FRAMES: CatalogOption[] = ["A", "B", "C", "D"].map((type, index) => ({
  id: `frame-${type.toLowerCase()}`,
  name: `Тип ${type}`,
  description: "Вариант внешней рамы и монтажного узла.",
  image: `/assets/frames/type-${type.toLowerCase()}.png`,
  priceDelta: index * 55,
}));

export const HANDLES: CatalogOption[] = [
  { id: "hoppe-toulon", name: "Hoppe Toulon", description: "Минималистичная алюминиевая ручка.", image: "/assets/handles/hoppe-toulon.jpg", priceDelta: 0 },
  { id: "hoppe-toulon-lock", name: "Toulon Lockable", description: "Ручка с замком.", image: "/assets/handles/hoppe-toulon-lock.jpg", priceDelta: 48 },
  { id: "secuforte", name: "Toulon SecuForte", description: "Защита от смещения и взлома.", image: "/assets/handles/secuforte.jpg", priceDelta: 72 },
  { id: "new-york", name: "Hoppe New York", description: "Более выразительная классическая форма.", image: "/assets/handles/new-york.jpg", priceDelta: 24 },
];
