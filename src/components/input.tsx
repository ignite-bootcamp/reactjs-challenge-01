import classNames from "classnames";
import { useState } from "react";

type InputProps = {
  onChange: (value: string) => void;
};

export function Input({ onChange }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <input
      type="text"
      value={inputValue}
      onChange={event => {
        setInputValue(event.target.value);
        onChange(event.target.value);
      }}
      placeholder="Adicione uma nova tarefa"
      className={classNames(
        "bg-gray-500 rounded-lg p-4 placeholder:text-gray-300 text-gray-100 w-full text-lg border",
        {
          "border-product-purple": !!inputValue,
          "border-gray-500": !inputValue,
        },
      )}
    />
  );
}
