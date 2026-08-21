"use client";

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-8 items-center justify-center rounded-xl bg-transparent text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      <Icon icon={isDark ? Moon02Icon : Sun03Icon} size={16} />
    </button>
  );
}
