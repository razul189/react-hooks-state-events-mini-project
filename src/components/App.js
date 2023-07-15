import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const handleTaskFormSubmit = (newTask) => {
    // Add logic to handle the submitted task
    console.log("New task submitted:", newTask);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList />
    </div>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter categories= {CATEGORIES} />
//       <NewTaskForm />
//       <TaskList tasks={TASKS}/>
//     </div>
//   );
// }


