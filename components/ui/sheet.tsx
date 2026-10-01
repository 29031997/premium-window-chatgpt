"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;

export function SheetContent({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/30 backdrop-blur-sm data-[state=open]:animate-in" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-[90] w-full max-w-md overflow-y-auto border-l border-black/10 bg-[#f6f4ef] p-7 shadow-2xl outline-none",
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-black/5 hover:bg-black/10" aria-label="Закрыть">
          <X className="size-4" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export const SheetTitle = Dialog.Title;
export const SheetDescription = Dialog.Description;
