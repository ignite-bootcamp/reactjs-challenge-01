import classNames from "classnames";
import { Checkbox } from "./checkbox";
import { DeleteButton } from "./delete-button";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { ReactNode } from "react";

type TaskProps = {
  id: string;
  completed?: boolean;
  onClickDelete: () => void;
  children: ReactNode;
} & Pick<CheckboxProps, "onCheckedChange">;

export function Task({
  completed,
  id,
  onCheckedChange,
  onClickDelete,
  children,
}: TaskProps) {
  return (
    <div
      className={classNames(
        "flex gap-3 items-center justify-between bg-gray-500 border p-4 w-full rounded-lg",
        {
          "border-gray-500": completed,
          "border-gray-400": !completed,
        },
      )}
    >
      <label
        htmlFor={id}
        className="flex items-center gap-3 cursor-pointer flex-1"
      >
        <Checkbox
          checked={completed}
          onCheckedChange={onCheckedChange}
          id={id}
          aria-describedby="label-description"
        />
        <span
          id="label-description"
          className={classNames("flex-1", {
            "text-gray-100": !completed,
            "text-gray-300 line-through": completed,
          })}
        >
          {children}
        </span>
      </label>
      <DeleteButton onClick={onClickDelete} />
    </div>
  );
}
