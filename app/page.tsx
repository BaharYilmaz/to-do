"use client";
import { useState } from "react";

type TodoPropsType = {
  id: number;
  name: string;
};

const Home = () => {
  const [todos, setTodos] = useState<TodoPropsType[]>([]);
  const [todoItem, setTodoItem] = useState("");

  const handleAddItem = () => {
    const tempTodos = [...todos];
    tempTodos.push({ id: tempTodos.length + 1, name: todoItem });
    setTodos(tempTodos);
    setTodoItem("");
  };

  const handleDeleteItem = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-20 gap-20">
      <div className="flex place-items-center">TO-DO APP</div>

      <div className="flex flex-col gap-10">
        <div className="mb-32 grid lg:mb-0 lg:grid-cols-2 lg:text-left gap-3">
          <input
            className="w-72 border-2 rounded-md px-3 py-3 hover:border-[#0264F6]"
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            placeholder="Enter a new item"
          />
          <button
            className="h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
            onClick={handleAddItem}
          >
            Add item
          </button>
        </div>

        {!!todos.length ? (
          <div className="w-full text-center flex items-center flex-col gap-5">
            <h1 className="text-blue-600 uppercase font-semibold text-2xl">
              To-do List
            </h1>
            <div className="w-full bg-white backdrop-blur-lg px-3 py-5 rounded-md">
              {todos &&
                todos.map(({ id, name }) => (
                  <div
                    className="flex justify-between items-center mb-5"
                    key={id}
                  >
                    <li className="list-none w-2/3 text-left break-normal">
                      {name}
                    </li>
                    <div className="flex">
                      <button
                        className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md"
                        onClick={() => handleDeleteItem(id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <span className="text-center">No todo here...</span>
        )}
      </div>
    </main>
  );
};

export default Home;
