"use client";

import { useState } from "react";

export const Input = ({
  type,
  value,
  label,
  placeholder,
  onChange,
  className,
  disabled,
}: {
  type: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}) => {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        className={`w-full p-2 border border-black/20 px-6 py-4 text-md font-extralight tracking-wide focus:outline-0 placeholder:text-xs ${className}`}
        type={type}
        value={inputValue}
        placeholder={placeholder?.toUpperCase()}
        onChange={onChange || handleChange}
        disabled={disabled}
      />
    </div>
  );
};
