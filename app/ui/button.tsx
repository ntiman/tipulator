import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'p-4 rounded-md transition-colors max-h-16 bg-neutral-very-dark-cyan text-neutral-very-light-grayish-cyan hover:bg-primary-strong-cyan hover:text-neutral-very-dark-cyan',
        className,
      )}
    >
      {children}
    </button>
  );
}