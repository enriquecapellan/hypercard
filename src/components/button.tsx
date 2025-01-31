import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={twMerge(
        "h-11 w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-200 text-sm font-medium transition-colors cursor-pointer text-gray-900 rounded px-4",
        props.className
      )}
      {...props}
    />
  );
};
