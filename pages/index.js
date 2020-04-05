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
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Todo App
        </Typography>
        <input
          type="text"
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
        <button onClick={() => addTodo()}>Add</button>
      </Box>
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
    </Container>
  );
};

export default App;
