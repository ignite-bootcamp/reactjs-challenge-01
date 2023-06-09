import classNames from "classnames";
import { Checkbox } from "./checkbox";
import { DeleteButton } from "./delete-button";
import { ReactNode } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

type TaskProps = {
  id: string;
  completed?: boolean;
  children: ReactNode;
  onClick: (value: CheckedState, id: string) => void;
  onClickDelete: (taskId: string) => void;
};

export function Task({
  id,
  children,
  completed,
  onClick,
  onClickDelete,
}: TaskProps) {
  return (
    <div
      className={classNames(
        "flex gap-3 items-center justify-between bg-gray-500 border p-4 w-full rounded-lg",
        {
          "border-gray-400": !completed,
          "border-gray-500": completed,
        },
      )}
    >
      <label
        htmlFor={id}
        className="flex items-center gap-3 cursor-pointer flex-1"
      >
        <Checkbox
          checked={completed}
          onCheckedChange={value => onClick(value, id)}
          id={id}
          aria-describedby="label-description"
        />
        <span
          id="label-description"
          className="flex-1 text-gray-100 peer-radix-state-checked:text-gray-300 peer-radix-state-checked:line-through"
        >
          {children}
        </span>
      </label>
      <DeleteButton onClick={() => onClickDelete(id)} />
    </div>
  );
}
