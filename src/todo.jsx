import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleTodo = () => {
    if (input !== "") {
      if(currentIndex === null ){
        setTodos([
            ...todos,
            {
              todo: input,
              isDone: false,
            },
          ]);
          localStorage.setItem(
            "todos",
            JSON.stringify([
              ...todos,
              {
                todo: input,
                isDone: false,
              },
            ])
          );
          setInput("");
      } else {
        const newTodos = [...todos];
        newTodos[currentIndex] = {
            todo: input,
            isDone: newTodos[currentIndex].isDone,
        }
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setInput("");
        setCurrentIndex(null);
      }
    }
  };

  // handle delete todo
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleComplete = (index) => {
    const newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  return (
    <div>
      <div className="flex justify-center mt-8 space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="border-2 bg-slate-50 "
        />
        <button
          onClick={handleTodo}
          className="bg-green-300 hover:bg-green-400 px-2 py-1"
        >
         {currentIndex === null ? "Ajouter" : "Modifier"}
        </button>
      </div>
      <div className="py-4 mt-4 flex flex-col justify-center items-center ">
        {todos.map((todo, index) => (
          <div key={index} className="flex justify-center items-center py-2 px-4 space-x-4 my-2 bg-green-100 shadow rounded-lg">
            <input className="w-8 h-8" checked={todo.isDone} onChange={() => handleComplete(index)} type="checkbox" name={`check${index}`} />
            <label className={todo.isDone? 'line-through': ''} htmlFor={`check${index}`}>{todo.todo}</label>
            <div className="space-x-2">
              <button onClick={() => {
                setCurrentIndex(index);
                setInput(todo.todo);
              }} className="border-2 border-gray-700 rounded-lg hover:bg-blue-400 px-2 py-1">
                Modifier
              </button>
              <button onClick={() => handleDelete(index)} className="bg-red-300 hover:bg-red-400 px-2 py-1">
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
