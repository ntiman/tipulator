'use client';

import clsx from 'clsx';

// TODO: remove any
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  callback?: any;
  selected?: boolean;
  primary?: boolean;
}

export function Button({ children, className, primary = false, callback, selected, value, ...rest }: ButtonProps) {
  const isPrimary = primary ? "bg-primary-strong-cyan text-neutral-very-dark-cyan" : "bg-neutral-very-dark-cyan text-neutral-very-light-grayish-cyan hover:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan";
  return (
    <button
      {...rest}
      className={clsx(
        `p-4 rounded-md transition-colors content-center max-h-16 ${isPrimary}`,
        className,
      )} onClick={(e) => callback(value)}
    >
      {children}
    </button>
  );
}