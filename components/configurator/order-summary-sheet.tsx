"use client";

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { calculateWindowPrice } from "@/lib/configurator/pricing";
import { useWindowConfiguratorStore } from "@/hooks/use-window-configurator-store";
import { formatCurrency } from "@/utils/format-currency";

export function OrderSummarySheet() {
  const configuration = useWindowConfiguratorStore((state) => state.configuration);
  const price = calculateWindowPrice(configuration);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">Посмотреть состав</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="pr-12 text-3xl font-medium tracking-[-0.03em]">Состав расчёта</SheetTitle>
        <SheetDescription className="mt-2 text-sm leading-6 text-stone-500">
          Предварительная конфигурация окна {configuration.width} × {configuration.height} мм.
        </SheetDescription>

        <div className="mt-8 space-y-4">
          {price.lines.map((line) => (
            <div key={line.id} className="flex items-baseline justify-between gap-6 border-b border-black/8 pb-4 text-sm">
              <span className="text-stone-600">{line.label}</span>
              <span className="font-medium text-stone-950">{line.id === "base" ? "" : "+"}{formatCurrency(line.amount)}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between">
          <span className="text-sm text-stone-500">Предварительно</span>
          <strong className="text-3xl font-medium tracking-[-0.04em]">{formatCurrency(price.total)}</strong>
        </div>
      </SheetContent>
    </Sheet>
  );
}
