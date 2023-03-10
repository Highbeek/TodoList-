import React, { useState } from "react";
import "./App.css";
import Task from "./components/Task";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskname: newTask,
      completed: false,
    };
    setTodoList(task.taskname !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

 const completeTask = (id) => {
   setTodoList(
     todoList.map((task) => {
       if (task.id === id) {
         return { ...task, completed: !task.completed };
       } else {
         return task;
       }
     })
   );
 };


  return (
    <div className="App">
      <div className="addTask">
        <h1>ToDO</h1>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              key={task.id}
              taskname={task.taskname}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
