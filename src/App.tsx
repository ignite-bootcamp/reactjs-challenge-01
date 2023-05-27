import { PlusCircledIcon } from "@radix-ui/react-icons";
import logo from "./assets/Logo.svg";
import empty from "./assets/Clipboard.svg";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Task } from "./components/task";
import classNames from "classnames";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FormEvent } from "react";

type TodoProps = {
  content: string;
  completed: boolean;
  id: string;
  created_at: string;
};

interface FormElements extends HTMLFormControlsCollection {
  todoContent: HTMLInputElement;
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function App() {
  const [todos, setTodos] = useLocalStorage<TodoProps[]>("todo-app:todos", []);
  const lastTodoId = todos.at(-1)?.id;
  const completedTasksLength = todos.filter(todos =>
    Boolean(todos.completed),
  ).length;

  function handleSubmit(event: FormEvent<UsernameFormElement>) {
    event.preventDefault();
    const inputElement = event.currentTarget.elements.todoContent;

    const newTodo: TodoProps = {
      content: inputElement.value,
      completed: false,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
    };

    setTodos(prevTodos => [...prevTodos, newTodo]);
  }

  function handleDeleteTodo(todoId: string) {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodos);
  }

  return (
    <section>
      <header className="bg-gray-700 h-52">
        <img src={logo} className="mx-auto pt-16" />
      </header>
      <div className="max-w-[736px] mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2 -mt-7 px-2">
          <Input
            key={lastTodoId}
            name="todoContent"
            placeholder="Adicione uma nova tarefa"
          />
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
              <span className="text-product-purple font-bold">Concluídas</span>
              <span className="ml-2 bg-gray-400 rounded-full px-2 py-[2px] text-sm text-gray-100 font-bold">
                {completedTasksLength} de {todos.length}
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
            <ul className="space-y-3 pb-8">
              {todos.map(todo => (
                <li key={todo.id}>
                  <Task
                    completed={todo.completed}
                    id={String(todo.id)}
                    onClick={console.log}
                    onClickDelete={handleDeleteTodo}
                  >
                    {todo.content}
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
