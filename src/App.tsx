import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./components/button";
import { Checkbox } from "./components/checkbox";
import { Input } from "./components/input";
import { DeleteButton } from "./components/delete-button";
import { Task } from "./components/task";

function App() {
  return (
    <div>
      <Checkbox onCheckedChange={console.log} />
      <Input onChange={console.log} />
      <Button onClick={console.log}>
        Criar
        <PlusCircledIcon className="w-4 h-4 ml-2" />
      </Button>
      <DeleteButton onClick={console.log} />
      <Task onClickDelete={console.log} id="taskId">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </Task>
    </div>
  );
}

export default App;
