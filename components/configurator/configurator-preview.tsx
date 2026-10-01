"use client";

import { WindowSvg } from "@/components/configurator/window-svg";
import { PriceDock } from "@/components/configurator/price-dock";

export function ConfiguratorPreview() {
  return (
    <div className="relative flex min-h-[580px] flex-1 flex-col overflow-hidden bg-[#e9e7e1] lg:min-h-0">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_50%_35%,rgba(255,255,255,.92),rgba(255,255,255,0)_58%)]" />
      <div className="relative min-h-0 flex-1 p-4 pb-0 sm:p-6 sm:pb-0 lg:p-8 lg:pb-0">
        <div className="h-full min-h-[420px] rounded-[28px] border border-white/70 bg-white/28 p-2 sm:min-h-[500px]">
          <WindowSvg />
        </div>
      </div>
      <div className="relative p-4 sm:p-6 lg:p-8">
        <PriceDock />
      </div>
    </div>
  );
}
