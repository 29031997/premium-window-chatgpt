import type { WindowTypeOption } from "@/types/configurator";

export const WINDOW_TYPES: WindowTypeOption[] = [
  { id: "one-sash", name: "1 створка", description: "Компактное окно для небольших проёмов.", image: "/assets/window-types/one-sash.png", priceDelta: 0, columns: 1 },
  { id: "two-sashes", name: "2 створки", description: "Универсальная конструкция для большинства помещений.", image: "/assets/window-types/two-sashes.png", priceDelta: 160, columns: 2 },
  { id: "three-sashes", name: "3 створки", description: "Больше света и гибкости открывания.", image: "/assets/window-types/three-sashes.png", priceDelta: 330, columns: 3 },
  { id: "four-sashes", name: "4 створки", description: "Широкая конструкция для панорамных проёмов.", image: "/assets/window-types/four-sashes.png", priceDelta: 540, columns: 4 },
  { id: "two-top-light", name: "2 створки + фрамуга", description: "Дополнительный верхний световой пояс.", image: "/assets/window-types/two-top-light.png", priceDelta: 420, columns: 2, topLight: true },
  { id: "three-bottom-light", name: "3 створки + нижняя секция", description: "Архитектурная конструкция с нижним световым поясом.", image: "/assets/window-types/three-bottom-light.png", priceDelta: 520, columns: 3, bottomLight: true },
];
