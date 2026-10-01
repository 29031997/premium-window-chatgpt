"use client";

import { calculateWindowPrice } from "@/lib/configurator/pricing";
import { useWindowConfiguratorStore } from "@/hooks/use-window-configurator-store";
import { formatCurrency } from "@/utils/format-currency";
import { OrderSummarySheet } from "@/components/configurator/order-summary-sheet";

export function PriceDock() {
  const configuration = useWindowConfiguratorStore((state) => state.configuration);
  const price = calculateWindowPrice(configuration);

  return (
    <div className="flex flex-col gap-4 rounded-[22px] border border-white/60 bg-white/80 p-4 shadow-[0_18px_50px_rgba(39,35,30,.10)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-stone-500">Предварительный расчёт</div>
        <div className="mt-1 flex flex-wrap items-baseline gap-x-3">
          <strong className="text-2xl font-medium tracking-[-0.04em] text-stone-950">{formatCurrency(price.total)}</strong>
          <span className="text-xs text-stone-500">{configuration.width} × {configuration.height} мм · {configuration.sections.length} сек.</span>
        </div>
      </div>
      <OrderSummarySheet />
    </div>
  );
}
