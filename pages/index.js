/*
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
*/

import { useState } from "react";
import react from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Layout from "../components/layout";
import Input from "@material-ui/core/Input";
import { FormControl, InputLabel } from "@material-ui/core";

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
    <Layout>
      <h1>Todo App</h1>
      <FormControl>
        <Input
          type="text"
          id="standard-basic"
          label="Stardard"
          name="todo"
          onChange={(e) => setTmpTodo(e.target.value)}
          value={tmpTodo}
        />
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={addTodo}
        >
          Add Todo
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={() => addTodo()}
        >
          Add Todo
        </Button>
      </FormControl>
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
    </Layout>
  );
};

export default App;
