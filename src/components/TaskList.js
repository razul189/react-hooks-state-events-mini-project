import React from "react";
import TaskComponent from "./Task";
import { TASKS } from "../data";


function TaskList() {
  return (
    <div className="tasks">
      {TASKS.map((task, index)=> (
        <TaskComponent key={index} task={task}/>
      ))}
    </div>
  );
}

export default TaskList;
