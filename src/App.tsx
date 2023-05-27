import { Checkbox } from "./components/checkbox";
import { Input } from "./components/input";

function App() {
  return (
    <div>
      <Checkbox onCheckedChange={console.log} />
      <Input onChange={console.log} />
    </div>
  );
}

export default App;
