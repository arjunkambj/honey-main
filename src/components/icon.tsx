import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

export function Icon({
  icon,
  className,
  strokeWidth = 2,
  size,
}: {
  icon: IconSvgElement;
  className?: string;
  strokeWidth?: number;
  size?: number;
}) {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}
