import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxProps = RadixCheckbox.CheckboxProps;

export function Checkbox(props: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      {...props}
      className="peer w-4 h-4 rounded-full border-2 border-product-blue flex items-center justify-center hover:bg-product-blueDark transition radix-state-checked:border-product-purpleDark radix-state-checked:bg-product-purpleDark radix-state-checked:hover:bg-product-purple radix-state-checked:hover:border-product-purple"
    >
      <RadixCheckbox.Indicator className="scale-90 text-gray-100">
        <CheckIcon />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
