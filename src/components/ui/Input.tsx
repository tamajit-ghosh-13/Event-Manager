import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-3 py-2 rounded-lg border bg-transparent transition-all focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-neutral-300 dark:border-neutral-700 focus:ring-blue-500 focus:border-blue-500"
        } ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
