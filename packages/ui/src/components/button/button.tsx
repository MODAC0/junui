'use client';

import { cn } from '@junui/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium whitespace-nowrap select-none',
    'transition-colors duration-(--junui-duration-base)',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--junui-ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--junui-bg)',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-(--junui-accent) text-(--junui-fg-on-primary)',
          'hover:bg-(--junui-accent-hover)',
        ],
        secondary: [
          'bg-(--junui-bg-muted) text-(--junui-fg)',
          'hover:bg-(--junui-bg-subtle)',
        ],
        outline: [
          'border border-(--junui-border-strong) bg-transparent text-(--junui-fg)',
          'hover:bg-(--junui-bg-muted)',
        ],
        ghost: [
          'bg-transparent text-(--junui-fg)',
          'hover:bg-(--junui-bg-muted)',
        ],
        destructive: [
          'bg-(--junui-danger) text-(--junui-fg-on-primary)',
          'hover:opacity-90',
        ],
        link: [
          'bg-transparent text-(--junui-accent) underline-offset-4',
          'hover:underline',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-(--junui-text-sm) rounded-(--junui-radius-md)',
        md: 'h-10 px-4 text-(--junui-text-sm) rounded-(--junui-radius-md)',
        lg: 'h-12 px-6 text-(--junui-text-base) rounded-(--junui-radius-lg)',
        icon: 'h-10 w-10 rounded-(--junui-radius-md)',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      block: false,
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, block }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { buttonVariants };
