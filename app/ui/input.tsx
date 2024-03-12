import clsx from "clsx";
import React from "react";

//TODO: remove any
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className: string;
  callback: any;
}

// TODO: Manage null values, manage input types
export function Input({ className, callback, ...rest }: InputProps) {
  return (
    <>
      <input
        {...rest}
        className={clsx(
          "flex h-10 items-center rounded-md max-h-16 bg-neutral-very-light-grayish-cyan p-6",
          className
        )}
        onChange={(e) => callback(e.target.value)}
      ></input>
    </>
  );
}
