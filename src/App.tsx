import { PlusCircledIcon } from "@radix-ui/react-icons";
import logo from "./assets/Logo.svg";
import { Input } from "./components/input";
import { Button } from "./components/button";
function App() {
  return (
    <section>
      <header className="bg-gray-700 h-52">
        <img src={logo} className="mx-auto pt-16" />
      </header>
      <div className="max-w-[736px] mx-auto">
        <form className="flex gap-2 -mt-7 px-2">
          <Input onChange={console.log} />
          <Button>
            Criar
            <PlusCircledIcon className="ml-2" />
          </Button>
        </form>
      </div>
    </section>
  );
}

export default App;
