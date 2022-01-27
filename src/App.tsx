import React, { useState } from 'react';
import './App.css';
import Inputfield from './Components/Inputfield';
import { Todo } from './Components/models';
import TodoList from './Components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }
  }
  console.log(todos);

  return (
    <div className="App">
      <span className="heading"> TaskiFy</span>
      <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
