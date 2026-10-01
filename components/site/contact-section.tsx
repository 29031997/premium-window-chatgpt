"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <footer id="contacts" className="bg-[#1d211e] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">Следующий шаг</div>
            <h2 className="mt-4 max-w-4xl text-5xl font-medium leading-[.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Обсудим ваш проём.
            </h2>
            <a href="tel:+74951248824" className="mt-10 inline-flex items-center gap-3 text-2xl text-white/80 hover:text-white">
              +7 495 124-88-24 <ArrowUpRight className="size-5" />
            </a>
            <div className="mt-10 grid gap-5 text-sm text-white/50 sm:grid-cols-2">
              <div>Шоурум<br /><span className="text-white/75">пр. Аль-Фараби, 116/1</span></div>
              <div>График<br /><span className="text-white/75">Пн–Сб · 09:00–19:00</span></div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            {sent ? (
              <div className="rounded-[28px] border border-white/15 bg-white/[.06] p-7">
                <div className="grid size-10 place-items-center rounded-full bg-white text-stone-950"><Check className="size-4" /></div>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em]">Заявка принята</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">Специалист свяжется с вами и уточнит размеры, систему и удобное время консультации.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-3">
                <input required placeholder="Имя" className="h-14 w-full rounded-2xl border border-white/12 bg-white/[.06] px-4 text-sm outline-none placeholder:text-white/35 focus:border-white/35" />
                <input required type="tel" placeholder="Телефон" className="h-14 w-full rounded-2xl border border-white/12 bg-white/[.06] px-4 text-sm outline-none placeholder:text-white/35 focus:border-white/35" />
                <textarea placeholder="Коротко о проекте" className="min-h-32 w-full resize-none rounded-2xl border border-white/12 bg-white/[.06] p-4 text-sm outline-none placeholder:text-white/35 focus:border-white/35" />
                <Button type="submit" className="h-14 w-full bg-white text-stone-950 hover:bg-white/90">Получить консультацию</Button>
                <p className="px-1 text-[10px] leading-4 text-white/35">Нажимая кнопку, вы соглашаетесь на обработку данных для обратной связи.</p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 VELORA</span>
          <span>Архитектурные окна · Панорамное остекление · Монтаж</span>
        </div>
      </div>
    </footer>
  );
}
