import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 ${className}`}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";
