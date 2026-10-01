"use client";

import { calculateWindowGeometry, windowFrameColor } from "@/lib/configurator/geometry";
import { LIMITS } from "@/lib/configurator/validation";
import { useWindowConfiguratorStore } from "@/hooks/use-window-configurator-store";

function NumberEditor({
  value,
  min,
  max,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex h-8 items-center rounded-full border border-black/10 bg-white/95 px-1 shadow-sm backdrop-blur">
      <button className="size-6 rounded-full text-stone-500 hover:bg-black/5" onClick={() => onChange(value - 50)} aria-label="Уменьшить">−</button>
      <input
        aria-label="Размер в миллиметрах"
        className="w-[58px] bg-transparent text-center text-[11px] font-medium outline-none"
        type="number"
        min={min}
        max={max}
        step={50}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <button className="size-6 rounded-full text-stone-500 hover:bg-black/5" onClick={() => onChange(value + 50)} aria-label="Увеличить">+</button>
    </div>
  );
}

export function WindowSvg() {
  const configuration = useWindowConfiguratorStore((state) => state.configuration);
  const setDimension = useWindowConfiguratorStore((state) => state.setDimension);
  const setSectionWidth = useWindowConfiguratorStore((state) => state.setSectionWidth);
  const geometry = calculateWindowGeometry(configuration);
  const frameColor = windowFrameColor(configuration);

  return (
    <svg viewBox={geometry.viewBox} className="h-full w-full" role="img" aria-label="Схема выбранного окна">
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dce7e8" />
          <stop offset="55%" stopColor="#edf4f3" />
          <stop offset="100%" stopColor="#cbd9d9" />
        </linearGradient>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodOpacity="0.12" />
        </filter>
      </defs>

      {geometry.extensions.map((rect) => (
        <rect key={rect.id} x={rect.x} y={rect.y} width={rect.width} height={rect.height} rx="3" fill="#aa8766" opacity="0.88" />
      ))}

      <rect
        x={geometry.outer.x}
        y={geometry.outer.y}
        width={geometry.outer.width}
        height={geometry.outer.height}
        rx="8"
        fill={frameColor}
        filter="url(#soft-shadow)"
      />

      {geometry.glass.map((rect, index) => (
        <rect
          key={rect.id}
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          rx="2"
          fill={configuration.sections[index]?.finish === "frosted" ? "#d7dddd" : rect.kind === "infill" ? "#c9c6bf" : "url(#glass)"}
          stroke="rgba(255,255,255,.58)"
          strokeWidth="2"
        />
      ))}

      {geometry.openingLines.map((line) => (
        <line key={line.id} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="rgba(39,47,46,.42)" strokeWidth="2" strokeDasharray="8 8" />
      ))}

      {geometry.glazingBars.map((line) => (
        <line key={line.id} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={frameColor} strokeWidth="6" />
      ))}

      {geometry.handles.map((handle) => (
        <g key={handle.id}>
          <circle cx={handle.x} cy={handle.y} r="5" fill="#222" />
          <rect x={handle.x - 2} y={handle.y - 5} width="4" height="24" rx="2" fill="#222" />
        </g>
      ))}

      <line x1={geometry.outer.x} y1={geometry.outer.y - 32} x2={geometry.outer.x + geometry.outer.width} y2={geometry.outer.y - 32} stroke="#918b82" strokeWidth="1" />
      <foreignObject x={geometry.outer.x + geometry.outer.width / 2 - 58} y={geometry.outer.y - 53} width="116" height="38">
        <NumberEditor value={configuration.width} min={LIMITS.width.min} max={LIMITS.width.max} onChange={(value) => setDimension("width", value)} />
      </foreignObject>

      <line x1={geometry.outer.x - 32} y1={geometry.outer.y} x2={geometry.outer.x - 32} y2={geometry.outer.y + geometry.outer.height} stroke="#918b82" strokeWidth="1" />
      <foreignObject x={geometry.outer.x - 88} y={geometry.outer.y + geometry.outer.height / 2 - 19} width="116" height="38">
        <div style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}>
          <NumberEditor value={configuration.height} min={LIMITS.height.min} max={LIMITS.height.max} onChange={(value) => setDimension("height", value)} />
        </div>
      </foreignObject>

      {geometry.sections.map((section, index) => (
        <foreignObject key={section.id} x={section.x + section.width / 2 - 54} y={geometry.outer.y + geometry.outer.height + 18} width="108" height="36">
          <NumberEditor
            value={configuration.sections[index].width}
            min={LIMITS.section.min}
            max={LIMITS.section.max}
            onChange={(value) => setSectionWidth(section.id, value)}
          />
        </foreignObject>
      ))}
    </svg>
  );
}
