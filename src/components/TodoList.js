import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newTodo) => {
    const newTodos = [...todos];
    newTodos[index] = newTodo;
    setTodos(newTodos);
  };

  return (
    <div className="bg-slate-900 min-h-screen ">
       <div className="p-5 max-w-2xl mx-auto">
      {/* title */}
      <h1 className="text-2xl text-center p-10 font-bold text-white">
        ToDo List
      </h1>

      {/* input  */}
      <div className="py-5">
        <TodoForm addTodo={addTodo} />
      </div>


      {/* show list */}
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
    </div>
   
  );
}

export default TodoList;
