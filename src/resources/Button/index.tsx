import React, { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

const button = tv({
  base: 'text-base border-0 rounded items-center transition duration-300 ease-in-out gap-3',
  variants: {
    variant: {
      outlined:
        'text-primary-100 border border-primary-100 px-4 py-3 hover:text-white hover:bg-primary-100',
      contained: 'text-white bg-primary-100 px-2 py-3 hover:bg-primary-200',
      ghost: 'text-gray-400 bg-transparent hover:text-primary-100',
    },
  },
  defaultVariants: {
    variant: 'contained',
  },
});

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    label: string;
    icon?: React.ReactNode;
  };

export default function Button({ label, variant, icon, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={button({ variant, className })}>
      {icon ? icon : null}
      {label}
    </button>
  );
}
