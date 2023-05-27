import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./components/button";
import { Checkbox } from "./components/checkbox";
import { Input } from "./components/input";

function App() {
  return (
    <div>
      <Checkbox onCheckedChange={console.log} />
      <Input onChange={console.log} />
      <Button onClick={console.log}>
        Criar
        <PlusCircledIcon className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

export default App;
