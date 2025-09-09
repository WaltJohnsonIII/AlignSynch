"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        className="opacity-0"
        data-oid="koufea7"
        size="icon"
        variant="outline"
      >
        <Sun className="h-5 w-5" data-oid="7o1fw-1" />
        <span className="sr-only" data-oid="6bmz64v">
          Toggle theme
        </span>
      </Button>
    );
  }

  return (
    <Button
      aria-label="Toggle theme"
      data-oid="hz6rldb"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" data-oid="pph9u17" />
      ) : (
        <Moon className="h-5 w-5" data-oid="onu7nue" />
      )}
      <span className="sr-only" data-oid="_eishq5">
        Toggle theme
      </span>
    </Button>
  );
}
