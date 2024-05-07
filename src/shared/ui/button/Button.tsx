import { Slot, Slottable } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes } from 'react';

import style from './Button.module.css';

type TProps = {
  asChild?: boolean;
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'text';
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  asChild = false,
  appearance = 'primary',
  leftElement = '',
  rightElement = '',
  className = '',
  children,
  ...rest
}: TProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      {...rest}
      className={`${style.button} ${style[appearance]} ${className}`}
    >
      {leftElement}
      <Slottable>{children}</Slottable>
      {rightElement}
    </Comp>
  );
};
