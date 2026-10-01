"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { OptionCard } from "@/components/configurator/option-card";
import { FieldTooltip } from "@/components/configurator/field-tooltip";
import { useWindowConfiguratorStore } from "@/hooks/use-window-configurator-store";
import { WINDOW_TYPES } from "@/data/window-types";
import { PROFILES } from "@/data/profiles";
import { GLAZING } from "@/data/glazing";
import { COLORS } from "@/data/colors";
import { OPENING_PRESETS } from "@/data/opening-presets";
import { HANDLES, OUTER_FRAMES } from "@/data/hardware";
import { LIMITS } from "@/lib/configurator/validation";
import type { OpeningMode, PaneFinish } from "@/types/configurator";

const openingOptions: { id: OpeningMode; name: string }[] = [
  { id: "fixed", name: "Глухая" },
  { id: "tilt-turn-left", name: "Поворотно-откидная влево" },
  { id: "tilt-turn-right", name: "Поворотно-откидная вправо" },
  { id: "turn-left", name: "Поворотная влево" },
  { id: "turn-right", name: "Поворотная вправо" },
  { id: "tilt", name: "Откидная" },
];

function Label({ children, help }: { children: React.ReactNode; help?: string }) {
  return (
    <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-stone-600">
      {children}
      {help ? <FieldTooltip text={help} /> : null}
    </div>
  );
}

function NumberField({
  value,
  onChange,
  min,
  max,
  step = 50,
}: {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div className="flex h-11 overflow-hidden rounded-xl border border-black/10 bg-white">
      <button type="button" className="w-10 text-stone-500 hover:bg-black/[.04]" onClick={() => onChange(value - step)}>−</button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
        className="min-w-0 flex-1 bg-transparent px-1 text-center text-sm font-medium outline-none"
      />
      <button type="button" className="w-10 text-stone-500 hover:bg-black/[.04]" onClick={() => onChange(value + step)}>+</button>
    </div>
  );
}

function ToggleRow({ label, help, checked, onCheckedChange }: { label: string; help?: string; checked: boolean; onCheckedChange: (value: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div className="flex items-center gap-1.5 text-sm text-stone-700">
        {label}
        {help ? <FieldTooltip text={help} /> : null}
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}

export function ConfiguratorControls() {
  const configuration = useWindowConfiguratorStore((state) => state.configuration);
  const setDimension = useWindowConfiguratorStore((state) => state.setDimension);
  const setWindowType = useWindowConfiguratorStore((state) => state.setWindowType);
  const setValue = useWindowConfiguratorStore((state) => state.setValue);
  const setSectionOpening = useWindowConfiguratorStore((state) => state.setSectionOpening);
  const applyOpeningPreset = useWindowConfiguratorStore((state) => state.applyOpeningPreset);
  const setSectionFinish = useWindowConfiguratorStore((state) => state.setSectionFinish);
  const toggleExtension = useWindowConfiguratorStore((state) => state.toggleExtension);

  return (
    <div className="h-full overflow-y-auto pr-1 [scrollbar-width:thin]">
      <div className="px-5 pb-3 pt-6 lg:px-6">
        <div className="text-[10px] uppercase tracking-[0.22em] text-stone-400">Конфигурация</div>
        <h3 className="mt-2 text-2xl font-medium tracking-[-0.035em]">Соберите своё окно</h3>
        <p className="mt-2 text-xs leading-5 text-stone-500">Любое изменение сразу видно справа и учитывается в расчёте.</p>
      </div>

      <Accordion type="multiple" defaultValue={["size", "type", "opening", "profile"]} className="px-5 lg:px-6">
        <AccordionItem value="size">
          <AccordionTrigger>Размеры</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label help="Полная ширина окна по внешней раме. При изменении сразу меняется вся конструкция на схеме.">Ширина, мм</Label>
                <NumberField value={configuration.width} min={LIMITS.width.min} max={LIMITS.width.max} onChange={(value) => setDimension("width", value)} />
              </div>
              <div>
                <Label help="Полная высота окна по внешней раме.">Высота, мм</Label>
                <NumberField value={configuration.height} min={LIMITS.height.min} max={LIMITS.height.max} onChange={(value) => setDimension("height", value)} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="type">
          <AccordionTrigger>Тип окна</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2.5">
              {WINDOW_TYPES.map((option) => (
                <OptionCard
                  key={option.id}
                  title={option.name}
                  description={option.description}
                  image={option.image}
                  selected={configuration.windowTypeId === option.id}
                  onClick={() => setWindowType(option.id)}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="opening">
          <AccordionTrigger>Открывание</AccordionTrigger>
          <AccordionContent>
            <div className="mb-5">
              <Label help="Готовые схемы взяты из исходного набора конфигуратора. Выбор сразу применяет открывания ко всем основным створкам.">Готовые схемы</Label>
              <div className="grid grid-cols-2 gap-2.5">
                {OPENING_PRESETS.filter((preset) => preset.columns === configuration.sections.length).map((preset) => (
                  <OptionCard
                    key={preset.id}
                    title={preset.name}
                    image={preset.image}
                    selected={preset.openings.every((opening, index) => configuration.sections[index]?.opening === opening)}
                    onClick={() => applyOpeningPreset(preset.openings)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {configuration.sections.map((section, index) => (
                <div key={section.id}>
                  <Label help="Показывает, как именно открывается створка: направление и тип механизма.">Секция {index + 1}</Label>
                  <select
                    value={section.opening}
                    onChange={(event) => setSectionOpening(section.id, event.target.value as OpeningMode)}
                    className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none focus:border-stone-400"
                  >
                    {openingOptions.map((option) => <option key={option.id} value={option.id}>{option.name}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="profile">
          <AccordionTrigger>Профиль</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2.5">
              {PROFILES.map((option) => (
                <OptionCard
                  key={option.id}
                  title={option.name}
                  description={option.description}
                  image={option.image}
                  selected={configuration.profileId === option.id}
                  onClick={() => setValue("profileId", option.id)}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger>Цвет</AccordionTrigger>
          <AccordionContent>
            {(["interiorColorId", "exteriorColorId"] as const).map((key) => (
              <div key={key} className="mb-5 last:mb-0">
                <Label help={key === "interiorColorId" ? "Цвет окна со стороны интерьера." : "Цвет окна со стороны улицы."}>
                  {key === "interiorColorId" ? "Внутри" : "Снаружи"}
                </Label>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6">
                  {COLORS.map((color) => (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => setValue(key, color.id)}
                      className="group min-w-0 text-center"
                      title={color.name}
                    >
                      <span
                        className={`relative mx-auto block size-10 overflow-hidden rounded-xl border border-black/10 shadow-sm transition group-hover:scale-105 ${configuration[key] === color.id ? "ring-2 ring-stone-950 ring-offset-2" : ""}`}
                        style={{ backgroundColor: color.hex }}
                      >
                        {color.image ? <img src={color.image} alt="" className="size-full object-cover" /> : null}
                      </span>
                      <span className="mt-1.5 block truncate text-[9px] text-stone-500">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="glazing">
          <AccordionTrigger>Стеклопакет</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2.5">
              {GLAZING.map((option) => (
                <OptionCard
                  key={option.id}
                  title={option.name}
                  description={option.description}
                  image={option.image}
                  selected={configuration.glazingId === option.id}
                  onClick={() => setValue("glazingId", option.id)}
                />
              ))}
            </div>
            <div className="mt-4">
              <ToggleRow
                label="Тёплая рамка"
                help="Тёплая дистанционная рамка по краю стеклопакета помогает уменьшить теплопотери и риск конденсата."
                checked={configuration.warmEdge}
                onCheckedChange={(value) => setValue("warmEdge", value)}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="glass-finish">
          <AccordionTrigger>Стекло по секциям</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {configuration.sections.map((section, index) => (
                <div key={section.id}>
                  <Label help="Матовое стекло даёт приватность, а непрозрачная панель полностью заменяет стекло.">Секция {index + 1}</Label>
                  <select
                    value={section.finish}
                    onChange={(event) => setSectionFinish(section.id, event.target.value as PaneFinish)}
                    className="h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm outline-none"
                  >
                    <option value="clear">Прозрачное стекло</option>
                    <option value="frosted">Матовое стекло</option>
                    <option value="infill">Непрозрачная панель</option>
                  </select>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="frame">
          <AccordionTrigger>Рама / доборы</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2.5">
              {OUTER_FRAMES.map((option) => (
                <OptionCard
                  key={option.id}
                  title={option.name}
                  description={option.description}
                  image={option.image}
                  selected={configuration.outerFrameId === option.id}
                  onClick={() => setValue("outerFrameId", option.id)}
                />
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {([
                ["top", "Сверху"],
                ["right", "Справа"],
                ["bottom", "Снизу"],
                ["left", "Слева"],
              ] as const).map(([side, label]) => (
                <button
                  key={side}
                  type="button"
                  onClick={() => toggleExtension(side)}
                  className={`rounded-xl border px-3 py-2.5 text-xs transition ${configuration.extensions[side] ? "border-stone-950 bg-stone-950 text-white" : "border-black/10 bg-white text-stone-600"}`}
                >
                  Добор · {label}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="handle">
          <AccordionTrigger>Ручки и фурнитура</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2.5">
              {HANDLES.map((option) => (
                <OptionCard
                  key={option.id}
                  title={option.name}
                  description={option.description}
                  image={option.image}
                  selected={configuration.handleId === option.id}
                  onClick={() => setValue("handleId", option.id)}
                />
              ))}
            </div>
            <div className="mt-4">
              <Label>Цвет ручки</Label>
              <div className="grid grid-cols-4 gap-2">
                {(["silver", "black", "white", "bronze"] as const).map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setValue("handleColor", color)}
                    className={`rounded-xl border px-2 py-2 text-[10px] capitalize ${configuration.handleColor === color ? "border-stone-950 bg-stone-950 text-white" : "border-black/10 bg-white"}`}
                  >
                    {{ silver: "Серебро", black: "Чёрный", white: "Белый", bronze: "Бронза" }[color]}
                  </button>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="options">
          <AccordionTrigger>Дополнительные опции</AccordionTrigger>
          <AccordionContent>
            <ToggleRow
              label="Декоративные раскладки"
              help="Декоративные планки визуально делят стекло на части."
              checked={configuration.glazingBars}
              onCheckedChange={(value) => setValue("glazingBars", value)}
            />
            <ToggleRow
              label="Магнитный контакт"
              help="Встроенный магнитный контакт для сигнализации или системы умного дома."
              checked={configuration.alarmContact}
              onCheckedChange={(value) => setValue("alarmContact", value)}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="installation">
          <AccordionTrigger>Монтаж / установка</AccordionTrigger>
          <AccordionContent>
            <ToggleRow
              label="Монтаж компанией"
              help="Установка окна силами монтажной команды компании."
              checked={configuration.installation}
              onCheckedChange={(value) => setValue("installation", value)}
            />
            <div className="mt-3">
              <Label help="Высота установки окна относительно пола. Нужна для понимания монтажного положения конструкции.">Высота установки, мм</Label>
              <NumberField value={configuration.installationHeight} min={0} max={3000} step={50} onChange={(value) => setDimension("installationHeight", value)} />
            </div>
            <div className="mt-3">
              <ToggleRow
                label="Монтажные отверстия"
                help="Подготовленные отверстия в раме для крепления при установке."
                checked={configuration.preDrilledHoles}
                onCheckedChange={(value) => setValue("preDrilledHoles", value)}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="notes">
          <AccordionTrigger>Комментарий</AccordionTrigger>
          <AccordionContent>
            <Label help="Дополнительные пожелания по заказу.">Пожелания</Label>
            <textarea
              value={configuration.notes}
              onChange={(event) => setValue("notes", event.target.value)}
              placeholder="Например: нужен тёплый монтаж, цвет фасада — тёмный камень…"
              className="min-h-28 w-full resize-none rounded-2xl border border-black/10 bg-white p-3 text-sm leading-5 outline-none placeholder:text-stone-400"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
