"use client";

import { Icon } from "@iconify/react";

export function SolarIcon({
  icon,
  className,
  style,
}: {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return <Icon icon={icon} className={className} style={style} />;
}
