import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex items-center justify-center p-4 rounded-lg bg-product-blueDark hover:bg-product-blue text-gray-100 transition font-bold text-md"
      {...rest}
    >
      {children}
    </button>
  );
}
