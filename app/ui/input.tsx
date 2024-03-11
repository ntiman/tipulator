import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className: string;
}

export function Input({ className, ...rest }: InputProps) {
  return (
    <>
    <input
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-md max-h-16 bg-neutral-very-light-grayish-cyan p-6',
        className,
      )}
    >
    </input>
    </>
  );
}