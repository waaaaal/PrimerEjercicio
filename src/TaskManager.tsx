import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface Task {
  text: string;
  completed: boolean; 
}

function TaskManager() : JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

 
  return (
    <main>
      <div className="container-wrapper main-content">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default TaskManager;