import React, { useState, useEffect } from "react";

const TodoApp: React.FC = () => {
  const [todo, setTodo] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodo([...todo, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleAddTodo}>+</button>
      <ul>
        {todo.map((todoItem, index) => (
          <li key={index}>
            {todoItem}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
