"use client";

import { Mail01Icon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { Icon } from "@/components/icon";
import { toast } from "@/components/ui/toast";
import { site } from "@/lib/site";

export function EmailButton({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    toast.add({
      type: "copied",
      title: "Email copied",
      timeout: 3000,
    });
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button type="button" onClick={copyEmail} className={className}>
      <Icon icon={Mail01Icon} className="size-4" />
      {copied ? "Copied" : children}
    </button>
  );
}
