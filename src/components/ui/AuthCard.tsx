import React from "react";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AuthCard = ({ children, className }: AuthCardProps) => {
  return (
    <div
      className={`w-full max-w-md p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
};
