"use client";

import { useRef } from "react";
import { ArrowDown, ShieldCheck, Volume2, Wind } from "lucide-react";
import { useStoryScroll } from "@/hooks/use-story-scroll";

export function HeroStory() {
  const root = useRef<HTMLElement>(null);
  useStoryScroll(root);

  return (
    <section ref={root} id="technology" className="relative min-h-screen overflow-hidden bg-[#202521] text-white">
      <div data-story="hero-mask" className="absolute inset-0 overflow-hidden [clip-path:inset(0%_0%_0%_0%_round_0rem)]">
        <div
          data-story="hero-image"
          className="absolute inset-0 scale-100 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(12,16,13,.52),rgba(12,16,13,.06) 62%,rgba(12,16,13,.20)),url('/assets/generated/hero-architecture.webp')",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_28%,rgba(205,226,216,.18),transparent_31%)]" />

      <div data-story="profile" className="pointer-events-none absolute inset-0 scale-[.92] opacity-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(24,29,25,.76),rgba(24,29,25,.10)),url('/assets/profiles/natura-solid-96.jpg')",
          }}
        />
      </div>

      <div data-story="manufacturing" className="pointer-events-none absolute inset-0 scale-[1.06] opacity-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(17,20,18,.72),rgba(17,20,18,.13)),url('/assets/generated/hero-architecture.webp')",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-end px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20">
        <div data-story="hero-copy" data-mobile-reveal className="max-w-[780px]">
          <div className="mb-5 text-[11px] uppercase tracking-[0.26em] text-white/60">Архитектурные оконные системы</div>
          <h1 className="text-[clamp(3.2rem,8.7vw,8.8rem)] font-medium leading-[.83] tracking-[-0.075em]">
            Свет.<br />Тишина.<br />Архитектура.
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
            Окна, которые становятся частью пространства — от первого миллиметра профиля до финального монтажа.
          </p>
          <div className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/55">
            <span className="grid size-9 place-items-center rounded-full border border-white/25"><ArrowDown className="size-3.5" /></span>
            Исследовать конструкцию
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-5 flex max-w-lg flex-col justify-center gap-8 sm:left-8 lg:left-12">
          {[
            { icon: Volume2, title: "До 47 dB", text: "акустического комфорта" },
            { icon: Wind, title: "Ug 0,5–0,7", text: "энергоэффективное остекление" },
            { icon: ShieldCheck, title: "RC2 / RC3", text: "варианты усиленной защиты" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} data-story="tech-copy" className="w-[270px] opacity-0">
              <div className="mb-3 grid size-9 place-items-center rounded-full border border-white/20 bg-white/5"><Icon className="size-4" /></div>
              <div className="text-3xl font-medium tracking-[-0.04em]">{title}</div>
              <div className="mt-1 text-sm text-white/55">{text}</div>
            </div>
          ))}
        </div>

        <div data-story="final-copy" className="pointer-events-none absolute bottom-16 left-5 max-w-xl opacity-0 sm:left-8 lg:bottom-20 lg:left-12">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/55">Точность в производстве</div>
          <h2 className="mt-3 text-4xl font-medium leading-[.96] tracking-[-0.05em] sm:text-6xl">Чтобы в доме оставалось только то, что должно быть внутри.</h2>
        </div>
      </div>
    </section>
  );
}
