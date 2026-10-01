"use client";

import { ConfiguratorControls } from "@/components/configurator/configurator-controls";
import { ConfiguratorPreview } from "@/components/configurator/configurator-preview";

export function WindowConfigurator() {
  return (
    <section id="configurator" className="scroll-mt-20 bg-[#f3f1ec] px-3 py-14 sm:px-5 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-8 max-w-3xl lg:mb-12">
          <div className="text-[11px] uppercase tracking-[0.24em] text-stone-500">Предварительный расчёт</div>
          <h2 className="mt-3 text-4xl font-medium tracking-[-0.05em] text-stone-950 sm:text-5xl lg:text-6xl">Окно, собранное под ваш проём.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">
            Настройте конструкцию и сразу увидите пропорции, способ открывания и ориентировочную стоимость.
          </p>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_30px_90px_rgba(42,36,30,.08)] lg:grid lg:h-[min(850px,calc(100vh-96px))] lg:min-h-[700px] lg:grid-cols-[minmax(310px,28%)_1fr]">
          <div className="max-h-[760px] border-b border-black/8 bg-[#faf9f6] lg:max-h-none lg:border-b-0 lg:border-r">
            <ConfiguratorControls />
          </div>
          <div className="lg:min-h-0">
            <ConfiguratorPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
