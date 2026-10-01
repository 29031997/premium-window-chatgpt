import type { WindowTypeOption } from "@/types/configurator";

export const WINDOW_TYPES: WindowTypeOption[] = [
  { id: "one-sash", name: "1 створка", description: "Компактная базовая конструкция.", image: "/assets/configurator/window-types/1-sash.webp", priceDelta: 0, columns: 1 },
  { id: "one-top-light", name: "1 створка + верхняя фрамуга", description: "Основная створка и верхняя световая секция.", image: "/assets/configurator/window-types/1-sash-with-top-light.webp", priceDelta: 170, columns: 1, transom: "top", transomParts: 1 },
  { id: "one-bottom-light", name: "1 створка + нижняя фрамуга", description: "Основная створка и нижняя световая секция.", image: "/assets/configurator/window-types/1-sash-with-bottom-light.webp", priceDelta: 170, columns: 1, transom: "bottom", transomParts: 1 },

  { id: "two-sashes", name: "2 створки", description: "Универсальная конструкция для большинства помещений.", image: "/assets/configurator/window-types/2-sashes.webp", priceDelta: 160, columns: 2 },
  { id: "two-top-light", name: "2 створки + верхняя фрамуга", description: "Две створки и единая верхняя секция.", image: "/assets/configurator/window-types/2-sashes-with-top-light.webp", priceDelta: 360, columns: 2, transom: "top", transomParts: 1 },
  { id: "two-top-lights", name: "2 створки + 2 верхние фрамуги", description: "Две створки и две раздельные верхние секции.", image: "/assets/configurator/window-types/2-sash-with-2-top-lights.webp", priceDelta: 410, columns: 2, transom: "top", transomParts: 2 },
  { id: "two-bottom-light", name: "2 створки + нижняя фрамуга", description: "Две створки и единая нижняя секция.", image: "/assets/configurator/window-types/2-sash-with-bottom-light.webp", priceDelta: 360, columns: 2, transom: "bottom", transomParts: 1 },
  { id: "two-bottom-lights", name: "2 створки + 2 нижние фрамуги", description: "Две створки и две раздельные нижние секции.", image: "/assets/configurator/window-types/2-sash-with-2-bottom-lights.webp", priceDelta: 410, columns: 2, transom: "bottom", transomParts: 2 },

  { id: "three-sashes", name: "3 створки", description: "Больше света и гибкости открывания.", image: "/assets/configurator/window-types/3-sashes.webp", priceDelta: 330, columns: 3 },
  { id: "three-top-light", name: "3 створки + верхняя фрамуга", description: "Три створки и единая верхняя секция.", image: "/assets/configurator/window-types/3-sashes-with-top-light.webp", priceDelta: 510, columns: 3, transom: "top", transomParts: 1 },
  { id: "three-top-lights", name: "3 створки + 3 верхние фрамуги", description: "Три створки и три верхние секции.", image: "/assets/configurator/window-types/3-sashes-with-top-light-3-part.webp", priceDelta: 570, columns: 3, transom: "top", transomParts: 3 },
  { id: "three-bottom-light", name: "3 створки + нижняя фрамуга", description: "Три створки и единая нижняя секция.", image: "/assets/configurator/window-types/3-sashes-with-bottom-light.webp", priceDelta: 510, columns: 3, transom: "bottom", transomParts: 1 },
  { id: "three-bottom-lights", name: "3 створки + 3 нижние фрамуги", description: "Три створки и три нижние секции.", image: "/assets/configurator/window-types/3-sashes-with-bottom-light-3-part.webp", priceDelta: 570, columns: 3, transom: "bottom", transomParts: 3 },

  { id: "four-sashes", name: "4 створки", description: "Широкая конструкция для панорамных проёмов.", image: "/assets/configurator/window-types/4-sashes.webp", priceDelta: 540, columns: 4 },
];
