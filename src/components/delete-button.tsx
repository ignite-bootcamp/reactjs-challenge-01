import { TrashIcon } from "@radix-ui/react-icons";

type DeleteButtonProps = {
  onClick: () => void;
};

export function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="transition text-gray-300 w-6 h-6 hover:bg-gray-400 hover:text-feedback-danger flex items-center justify-center rounded-md"
    >
      <TrashIcon />
    </button>
  );
}
