import React from "react";
import "./Task.css";
import { RiDeleteBinFill } from "react-icons/ri";

const Task = (props) => {
  return (
    <div
      className="task"
      style={{ backgroundColor: props.completed ? "#4CAF50" : "#fff" }}
    >
      <h1>{props.taskname}</h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>

      <RiDeleteBinFill onClick={() => props.deleteTask(props.id)} />
    </div>
  );
};

export default Task;
