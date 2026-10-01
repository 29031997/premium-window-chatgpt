import type { OpeningPreset } from "@/types/configurator";

export const OPENING_PRESETS: OpeningPreset[] = [
  { id: "1-fix", name: "Глухая", image: "/assets/configurator/opening/1-sash-fix.webp", columns: 1, openings: ["fixed"] },
  { id: "1-dkl", name: "Поворотно-откидная влево", image: "/assets/configurator/opening/1-sash-dkl.webp", columns: 1, openings: ["tilt-turn-left"] },
  { id: "1-dkr", name: "Поворотно-откидная вправо", image: "/assets/configurator/opening/1-sash-dkr.webp", columns: 1, openings: ["tilt-turn-right"] },
  { id: "1-kipp", name: "Откидная", image: "/assets/configurator/opening/1-sash-kipp.webp", columns: 1, openings: ["tilt"] },

  { id: "2-fix-fix", name: "Обе глухие", image: "/assets/configurator/opening/2-sashes-fix-fix.webp", columns: 2, openings: ["fixed", "fixed"] },
  { id: "2-dkl-fix", name: "Левая открывается", image: "/assets/configurator/opening/2-sashes-dkl-fix.webp", columns: 2, openings: ["tilt-turn-left", "fixed"] },
  { id: "2-fix-dkr", name: "Правая открывается", image: "/assets/configurator/opening/2-sashes-fix-dkr.webp", columns: 2, openings: ["fixed", "tilt-turn-right"] },
  { id: "2-dkl-dkr", name: "Обе открываются", image: "/assets/configurator/opening/2-sashes-dkl-dkr.webp", columns: 2, openings: ["tilt-turn-left", "tilt-turn-right"] },

  { id: "3-fix", name: "Все глухие", image: "/assets/configurator/opening/3-sashes-fix-fix-fix.webp", columns: 3, openings: ["fixed", "fixed", "fixed"] },
  { id: "3-edges", name: "Крайние открываются", image: "/assets/configurator/opening/3-sashes-dkl-fix-dkr.webp", columns: 3, openings: ["tilt-turn-left", "fixed", "tilt-turn-right"] },
  { id: "3-center", name: "Открывается центр", image: "/assets/configurator/opening/3-sashes-fix-dkl-fix.webp", columns: 3, openings: ["fixed", "tilt-turn-left", "fixed"] },
  { id: "3-right", name: "Открывается правая", image: "/assets/configurator/opening/3-sashes-fix-dkr-fix.webp", columns: 3, openings: ["fixed", "tilt-turn-right", "fixed"] },

  { id: "4-fix", name: "Все глухие", image: "/assets/configurator/opening/4-sashes-fix-fix-fix-fix.webp", columns: 4, openings: ["fixed", "fixed", "fixed", "fixed"] },
  { id: "4-edges", name: "Крайние открываются", image: "/assets/configurator/opening/4-sashes-dkl-fix-fix-dkr.webp", columns: 4, openings: ["tilt-turn-left", "fixed", "fixed", "tilt-turn-right"] },
  { id: "4-center", name: "Центральная пара", image: "/assets/configurator/opening/4-sashes-fix-dkl-dkr-fix.webp", columns: 4, openings: ["fixed", "tilt-turn-left", "tilt-turn-right", "fixed"] },
  { id: "4-pairs", name: "Две пары створок", image: "/assets/configurator/opening/4-sashes-dkl-dkl-dkr-dkr.webp", columns: 4, openings: ["tilt-turn-left", "tilt-turn-left", "tilt-turn-right", "tilt-turn-right"] },
];
