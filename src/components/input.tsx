import classNames from "classnames";
import { useState } from "react";

type InputProps = {
  name: string;
  placeholder: string;
};

export function Input({ name, placeholder }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      autoFocus
      name={name}
      value={inputValue}
      placeholder={placeholder}
      onChange={event => {
        setInputValue(event.target.value);
      }}
      className={classNames(
        "bg-gray-500 rounded-lg p-4 placeholder:text-gray-300 text-gray-100 w-full text-lg border",
        {
          "border-product-purple": !!inputValue,
          "border-gray-700": !inputValue,
        },
      )}
    />
  );
}
