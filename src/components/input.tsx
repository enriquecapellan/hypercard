import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={twMerge(
      "w-full h-10 rounded px-3 py-2 mt-2 bg-[#1c1c1c] placeholder-[#aaa] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2",
      props.className
    )}
    {...props}
  />
);
