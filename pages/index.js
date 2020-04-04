import react from "react";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    if (tmpTodo === "") {
      alert("Please input message");
      return;
    }
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>Todo App</h1>
      <div className="form">
        <input
          type="text"
          name="todo"
          onChange={(e) => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>x</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
