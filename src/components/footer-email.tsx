"use client";

import { Mail01Icon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/icon";
import { toast } from "@/components/ui/toast";
import { site } from "@/lib/site";

export function FooterEmailButton() {
  async function copy() {
    await navigator.clipboard.writeText(site.email);
    toast.add({ type: "copied", title: "Email copied", timeout: 3000 });
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email"
      className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      <Icon icon={Mail01Icon} className="size-4" />
    </button>
  );
}
