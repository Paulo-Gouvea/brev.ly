import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export function Input({ title, placeholder, ...rest }: InputProps) {
  return (
    <>
      <label className="text-gray-500 text-Text-xs font-Text-xs">{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-[100%] h-[48px] rounded-md border-[1px] px-[16px] border-solid border-gray-300 focus:border-blue-base text-Text-md font-Text-md"
        {...rest}
      />
    </>
  );
}