/**
 * @junui/tokens — typed token references for JS consumers.
 *
 * 사용:
 *   import { color, space } from '@junui/tokens';
 *   <div style={{ background: color.bg, color: color.fg }} />
 *
 * 모든 값은 CSS 변수 참조 문자열. tokens.css 가 먼저 import 되어야 실제 값 해석 가능.
 */

const cssVar = <T extends string>(name: T) =>
  `var(--junui-${name})` as `var(--junui-${T})`;

export const color = {
  bg: cssVar('bg'),
  bgSubtle: cssVar('bg-subtle'),
  bgMuted: cssVar('bg-muted'),
  bgInverse: cssVar('bg-inverse'),

  fg: cssVar('fg'),
  fgMuted: cssVar('fg-muted'),
  fgSubtle: cssVar('fg-subtle'),
  fgInverse: cssVar('fg-inverse'),
  fgOnPrimary: cssVar('fg-on-primary'),

  border: cssVar('border'),
  borderStrong: cssVar('border-strong'),

  accent: cssVar('accent'),
  accentHover: cssVar('accent-hover'),
  accentSubtle: cssVar('accent-subtle'),

  positive: cssVar('positive'),
  danger: cssVar('danger'),
  warning: cssVar('warning'),

  ring: cssVar('ring'),
} as const;

export const space = {
  0: cssVar('space-0'),
  1: cssVar('space-1'),
  2: cssVar('space-2'),
  3: cssVar('space-3'),
  4: cssVar('space-4'),
  5: cssVar('space-5'),
  6: cssVar('space-6'),
  8: cssVar('space-8'),
  10: cssVar('space-10'),
  12: cssVar('space-12'),
  16: cssVar('space-16'),
  20: cssVar('space-20'),
  24: cssVar('space-24'),
} as const;

export const radius = {
  none: cssVar('radius-none'),
  sm: cssVar('radius-sm'),
  md: cssVar('radius-md'),
  lg: cssVar('radius-lg'),
  xl: cssVar('radius-xl'),
  '2xl': cssVar('radius-2xl'),
  full: cssVar('radius-full'),
} as const;

export const font = {
  sans: cssVar('font-sans'),
  mono: cssVar('font-mono'),
} as const;

export const text = {
  xs: cssVar('text-xs'),
  sm: cssVar('text-sm'),
  base: cssVar('text-base'),
  lg: cssVar('text-lg'),
  xl: cssVar('text-xl'),
  '2xl': cssVar('text-2xl'),
  '3xl': cssVar('text-3xl'),
  '4xl': cssVar('text-4xl'),
  '5xl': cssVar('text-5xl'),
} as const;

export const shadow = {
  xs: cssVar('shadow-xs'),
  sm: cssVar('shadow-sm'),
  md: cssVar('shadow-md'),
  lg: cssVar('shadow-lg'),
  xl: cssVar('shadow-xl'),
  '2xl': cssVar('shadow-2xl'),
} as const;

export const duration = {
  fast: cssVar('duration-fast'),
  base: cssVar('duration-base'),
  slow: cssVar('duration-slow'),
  slower: cssVar('duration-slower'),
} as const;

export const easing = {
  linear: cssVar('ease-linear'),
  in: cssVar('ease-in'),
  out: cssVar('ease-out'),
  inOut: cssVar('ease-in-out'),
} as const;

export const z = {
  dropdown: cssVar('z-dropdown'),
  sticky: cssVar('z-sticky'),
  overlay: cssVar('z-overlay'),
  modal: cssVar('z-modal'),
  popover: cssVar('z-popover'),
  toast: cssVar('z-toast'),
  tooltip: cssVar('z-tooltip'),
} as const;

export type ColorToken = keyof typeof color;
export type SpaceToken = keyof typeof space;
export type RadiusToken = keyof typeof radius;
export type TextToken = keyof typeof text;
export type ShadowToken = keyof typeof shadow;

export const tokens = {
  color,
  space,
  radius,
  font,
  text,
  shadow,
  duration,
  easing,
  z,
} as const;
