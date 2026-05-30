import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "w-full py-2.5 px-4 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
      secondary: "w-full py-2.5 px-4 rounded-lg font-medium text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors",
    };

    return (
      <button
        ref={ref}
        className={`${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
