"use client";

import { useState } from "react";

export const Input = ({
  type,
  value,
  label,
  placeholder,
  onChange,
}: {
  type: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [inputValue, setInputValue] = useState<string>(value.toUpperCase());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toUpperCase());
    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        className="w-full p-2 border border-black px-6 py-4 text-md font-bold tracking-wide focus:outline-0"
        type={type}
        value={inputValue}
        placeholder={placeholder?.toUpperCase()}
        onChange={onChange || handleChange}
      />
    </div>
  );
};
