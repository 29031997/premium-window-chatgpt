"use client";

import { useState } from "react";
import { Menu, X, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#technology", label: "Технологии" },
  { href: "#projects", label: "Проекты" },
  { href: "#configurator", label: "Конфигуратор" },
  { href: "#contacts", label: "Контакты" },
];

export function StickyHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 p-3 sm:p-5">
      <div className="pointer-events-auto mx-auto flex max-w-[1500px] items-center justify-between gap-3 rounded-full border border-white/55 bg-[#f7f5f0]/82 px-3 py-2 shadow-[0_12px_40px_rgba(30,26,22,.08)] backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2 px-2 text-sm font-semibold tracking-[0.14em]">
          <span className="grid size-7 place-items-center rounded-full bg-stone-950 text-[9px] text-white">V</span>
          VELORA
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div className={`flex items-center overflow-hidden transition-all duration-500 ${open ? "max-w-[520px] opacity-100" : "max-w-0 opacity-0"}`}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className="whitespace-nowrap rounded-full px-3 py-2 text-xs text-stone-600 hover:bg-black/5 hover:text-stone-950">
                {link.label}
              </a>
            ))}
          </div>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center rounded-full hover:bg-black/5" aria-label="Открыть меню">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          <a href="tel:+74951248824" className="text-xs font-medium text-stone-600">+7 495 124-88-24</a>
          <Button asChild size="sm">
            <a href="#configurator">Предварительный расчёт <ArrowDownRight className="size-3.5" /></a>
          </Button>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="grid size-10 place-items-center rounded-full md:hidden" aria-label="Открыть меню">
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      <div className={`pointer-events-auto mx-auto mt-2 max-w-[1500px] overflow-hidden rounded-[24px] border border-white/55 bg-[#f7f5f0]/94 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden ${open ? "max-h-[380px] opacity-100" : "max-h-0 border-transparent opacity-0"}`}>
        <nav className="flex flex-col p-3">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/8 px-3 py-4 text-base last:border-0"
            >
              <span>{link.label}</span>
              <span className="text-xs text-stone-400">0{index + 1}</span>
            </a>
          ))}
          <a href="tel:+74951248824" className="px-3 py-4 text-sm text-stone-500">+7 495 124-88-24</a>
          <Button asChild className="mt-1 w-full">
            <a href="#configurator" onClick={() => setOpen(false)}>Предварительный расчёт</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
