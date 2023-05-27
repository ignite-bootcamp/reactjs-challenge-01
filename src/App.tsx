import { PlusCircledIcon } from "@radix-ui/react-icons";
import logo from "./assets/Logo.svg";
import empty from "./assets/Clipboard.svg";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Task } from "./components/task";
import classNames from "classnames";

const todos = [
  {
    text: "titulo",
    completed: false,
    id: 1,
  },
  {
    text: "titulo 2",
    completed: true,
    id: 2,
  },
];

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

        <section className="px-2 mt-16">
          <header
            className={classNames(
              "flex items-center justify-between pb-6 border-b-gray-400",
              {
                "border-b": todos.length === 0,
              },
            )}
          >
            <div>
              <span className="text-product-blue font-bold">
                Tarefas criadas
              </span>
              <span className="ml-2 bg-gray-400 rounded-full px-2 py-[2px] text-sm text-gray-100 font-bold">
                0
              </span>
            </div>
            <div>
              <span className="text-product-purple font-bold">
                Tarefas criadas
              </span>
              <span className="ml-2 bg-gray-400 rounded-full px-2 py-[2px] text-sm text-gray-100 font-bold">
                0 de 5
              </span>
            </div>
          </header>
          {todos.length === 0 && (
            <div className="flex flex-col mt-16 items-center text-lg text-gray-300 text-center">
              <img src={empty} className="w-14 h-14 mx-auto mb-4" />
              <span className="font-bold">
                Você ainda não tem tarefas cadastradas
              </span>
              <span>Crie tarefas e organiza seus itens a fazer</span>
            </div>
          )}
          {todos.length > 0 && (
            <ul className="space-y-3">
              {todos.map(todo => (
                <li key={todo.id}>
                  <Task id={String(todo.id)} onClick={console.log}>
                    {todo.text}
                  </Task>
                </li>
              ))}
            </ul>
          )}{" "}
        </section>
      </div>
    </section>
  );
}

export default App;
