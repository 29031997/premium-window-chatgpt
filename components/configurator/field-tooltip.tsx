"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { CircleHelp } from "lucide-react";

export function FieldTooltip({ text }: { text: string }) {
  return (
    <TooltipPrimitive.Provider delayDuration={180}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button type="button" className="inline-grid size-5 place-items-center rounded-full text-stone-400 hover:bg-black/5 hover:text-stone-700" aria-label="Подсказка">
            <CircleHelp className="size-3.5" />
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={7}
            className="z-[120] max-w-[260px] rounded-xl bg-stone-950 px-3 py-2 text-xs leading-5 text-white shadow-xl"
          >
            {text}
            <TooltipPrimitive.Arrow className="fill-stone-950" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
