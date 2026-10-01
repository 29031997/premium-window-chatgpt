"use client";

import { create } from "zustand";
import { DEFAULT_CONFIGURATION, rebalanceSectionWidths, sectionsForWindowType } from "@/lib/configurator/configuration";
import { LIMITS } from "@/lib/configurator/validation";
import { clampNumber } from "@/utils/clamp-number";
import type { OpeningMode, PaneFinish, WindowConfiguration } from "@/types/configurator";

interface ConfiguratorStore {
  configuration: WindowConfiguration;
  setDimension: (key: "width" | "height" | "installationHeight", value: number) => void;
  setWindowType: (id: string) => void;
  setValue: <K extends keyof WindowConfiguration>(key: K, value: WindowConfiguration[K]) => void;
  setSectionWidth: (id: string, value: number) => void;
  setSectionOpening: (id: string, value: OpeningMode) => void;
  applyOpeningPreset: (values: OpeningMode[]) => void;
  setSectionFinish: (id: string, value: PaneFinish) => void;
  toggleExtension: (side: keyof WindowConfiguration["extensions"]) => void;
  reset: () => void;
}

export const useWindowConfiguratorStore = create<ConfiguratorStore>((set) => ({
  configuration: DEFAULT_CONFIGURATION,

  setDimension: (key, value) =>
    set((state) => {
      if (key === "width") {
        const width = clampNumber(value, LIMITS.width.min, LIMITS.width.max);
        return {
          configuration: {
            ...state.configuration,
            width,
            sections: rebalanceSectionWidths(state.configuration.sections, width),
          },
        };
      }
      if (key === "height") {
        return {
          configuration: {
            ...state.configuration,
            height: clampNumber(value, LIMITS.height.min, LIMITS.height.max),
          },
        };
      }
      return {
        configuration: {
          ...state.configuration,
          installationHeight: clampNumber(value, 0, 3000),
        },
      };
    }),

  setWindowType: (id) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        windowTypeId: id,
        sections: sectionsForWindowType(id, state.configuration.width),
      },
    })),

  setValue: (key, value) =>
    set((state) => ({ configuration: { ...state.configuration, [key]: value } })),

  setSectionWidth: (id, value) =>
    set((state) => {
      const index = state.configuration.sections.findIndex((section) => section.id === id);
      if (index < 0) return state;

      const sections = state.configuration.sections.map((section) => ({ ...section }));
      const nextIndex = index === sections.length - 1 ? index - 1 : index + 1;
      if (nextIndex < 0) return state;

      const pairTotal = sections[index].width + sections[nextIndex].width;
      const nextValue = clampNumber(value, LIMITS.section.min, Math.min(LIMITS.section.max, pairTotal - LIMITS.section.min));
      sections[index].width = nextValue;
      sections[nextIndex].width = pairTotal - nextValue;

      return { configuration: { ...state.configuration, sections } };
    }),

  setSectionOpening: (id, value) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        sections: state.configuration.sections.map((section) =>
          section.id === id ? { ...section, opening: value } : section,
        ),
      },
    })),

  applyOpeningPreset: (values) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        sections: state.configuration.sections.map((section, index) => ({
          ...section,
          opening: values[index] ?? section.opening,
        })),
      },
    })),

  setSectionFinish: (id, value) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        sections: state.configuration.sections.map((section) =>
          section.id === id ? { ...section, finish: value } : section,
        ),
      },
    })),

  toggleExtension: (side) =>
    set((state) => ({
      configuration: {
        ...state.configuration,
        extensions: {
          ...state.configuration.extensions,
          [side]: !state.configuration.extensions[side],
        },
      },
    })),

  reset: () => set({ configuration: DEFAULT_CONFIGURATION }),
}));
