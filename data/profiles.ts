import type { CatalogOption } from "@/types/configurator";

export const PROFILES: CatalogOption[] = [
  { id: "kommerling-76", name: "Kömmerling 76", description: "uPVC · универсальная система", priceDelta: 0 },
  { id: "kommerling-76-aluclip", name: "Kömmerling 76 AluClip", description: "uPVC + алюминиевая накладка", priceDelta: 260 },
  { id: "kommerling-88", name: "Kömmerling 88", description: "uPVC · глубокий энергоэффективный профиль", priceDelta: 180 },
  { id: "kommerling-88-aluclip", name: "Kömmerling 88 AluClip", description: "uPVC + алюминий · премиальная отделка", priceDelta: 410 },
  { id: "aluminium", name: "Aluminium windows", description: "Алюминиевая система для больших проёмов", priceDelta: 520 },
  { id: "schueco-aws-75", name: "Schüco AWS 75.SI Premium", description: "Алюминий · высокая теплоизоляция", priceDelta: 680 },
  { id: "schueco-aws-90", name: "Schüco AWS 90.SI+", description: "Алюминий · максимальная теплоизоляция", priceDelta: 820 },
  { id: "natura-line-78", name: "Natura Line 78", description: "Натуральное дерево · профиль 78 мм", priceDelta: 720 },
  { id: "natura-line-92", name: "Natura Line 92", description: "Натуральное дерево · глубокий профиль", priceDelta: 890 },
  { id: "natura-solid-96", name: "Natura Solid 96", description: "Дерево + алюминий · защита фасада", image: "/assets/profiles/natura-solid-96.jpg", priceDelta: 1120 },
  { id: "natura-solid-110", name: "Natura Solid 110", description: "Дерево + алюминий · максимальная глубина", priceDelta: 1340 },
];
