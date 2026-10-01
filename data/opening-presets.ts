import type { OpeningPreset } from "@/types/configurator";

export const OPENING_PRESETS: OpeningPreset[] = [
  { id: "1-fix", name: "Глухая", image: "/assets/configurator/opening/1-sash-fix.webp", columns: 1, openings: ["fixed"] },
  { id: "1-dkl", name: "Поворотно-откидная влево", image: "/assets/configurator/opening/1-sash-dkl.webp", columns: 1, openings: ["tilt-turn-left"] },
  { id: "1-dkr", name: "Поворотно-откидная вправо", image: "/assets/configurator/opening/1-sash-dkr.webp", columns: 1, openings: ["tilt-turn-right"] },
  { id: "1-kipp", name: "Откидная", image: "/assets/configurator/opening/1-sash-kipp.webp", columns: 1, openings: ["tilt"] },
];
