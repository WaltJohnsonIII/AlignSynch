"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SimpleDropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  className?: string;
}

export function SimpleDropdown({
  trigger,
  children,
  align = "left",
  className,
}: SimpleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" data-oid="exz60sz" ref={dropdownRef}>
      <div
        className="cursor-pointer"
        data-oid="fa3eey3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={cn(
            "absolute z-50 mt-2 min-w-[200px] rounded-md bg-popover p-1 shadow-md",
            "fade-in-0 zoom-in-95 animate-in",
            align === "left" ? "left-0" : "right-0",
            className
          )}
          data-oid="vs4n7_l"
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface SimpleDropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
  destructive?: boolean;
  disabled?: boolean;
  className?: string;
}

export function SimpleDropdownItem({
  children,
  onClick,
  destructive = false,
  disabled = false,
  className,
}: SimpleDropdownItemProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        destructive && "text-destructive hover:text-destructive",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      data-oid="c-_ssog"
      onClick={(e) => {
        e.stopPropagation();
        if (!disabled && onClick) onClick();
      }}
    >
      {children}
    </div>
  );
}

export function SimpleDropdownLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("px-2 py-1.5 font-semibold text-sm", className)}
      data-oid="j-ozxxn"
    >
      {children}
    </div>
  );
}

export function SimpleDropdownSeparator({ className }: { className?: string }) {
  return (
    <div className={cn("my-1 h-px bg-muted", className)} data-oid="oac-7re" />
  );
}
