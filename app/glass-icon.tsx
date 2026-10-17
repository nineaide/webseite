import type { LucideIcon } from 'lucide-react';

/** Layered material around a familiar symbol; decorative alongside a text label. */
export function GlassIcon({
  icon: Icon,
  small = false,
}: {
  icon: LucideIcon;
  small?: boolean;
}) {
  return (
    <span
      className={'s-glass-icon' + (small ? ' s-glass-icon-small' : '')}
      aria-hidden="true"
    >
      <span className="s-glass-icon-depth" />
      <Icon size={small ? 16 : 26} strokeWidth={1.6} />
    </span>
  );
}
