"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";

interface OptionCardProps {
  title: string;
  description?: string;
  image?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function OptionCard({ title, description, image, selected, onClick }: OptionCardProps) {
  const [failed, setFailed] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group overflow-hidden rounded-2xl border bg-white/70 text-left transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white",
        selected ? "border-stone-950 ring-1 ring-stone-950" : "border-black/8",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eeece6]">
        {image && !failed ? (
          <Image src={image} alt="" fill sizes="180px" className="object-cover transition duration-500 group-hover:scale-[1.03]" onError={() => setFailed(true)} />
        ) : (
          <div className="grid size-full place-items-center text-stone-400">
            <ImageIcon className="size-6" strokeWidth={1.4} />
          </div>
        )}
      </div>
      <div className="p-3.5">
        <div className="text-sm font-medium text-stone-950">{title}</div>
        {description ? <div className="mt-1 text-[11px] leading-4 text-stone-500">{description}</div> : null}
      </div>
    </button>
  );
}
