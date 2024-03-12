'use client';

import clsx from 'clsx';

// TODO: remove any
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  callback?: any;
  selected?: boolean;
}

export function Button({ children, className, callback, selected, value, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'p-4 rounded-md transition-colors max-h-16 bg-neutral-very-dark-cyan text-neutral-very-light-grayish-cyan hover:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan',
        className,
      )} onClick={(e) => callback(value)}
    >
      {children}
    </button>
  );
}