import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface Task {
  text: string;
  completed: boolean; 
}

function TaskManager() : JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCompleted = (index: number): void => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  }

  function createTask(taskText: string):void{
    const newTask: Task = { text: taskText, completed: false };

    setTasks([...tasks, newTask]);
  }

  return (
    <main>
      <div className="container-wrapper main-content">
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} handleCompleted={handleCompleted} />
      </div>
    </main>
  );
}

export default TaskManager;
