import React from "react";
import { useSelector } from "react-redux";

interface Task {
  text: string;
  completed: boolean;
}
function TaskDone():JSX.Element {

  const tasks = useSelector((state: any) => state.tasks.tasks);


  return (
    <section className="tasks">
     <ul className="task-list">
        {tasks.map((task: Task, index: number) => (
          <li
            key={index}
            className={task.completed ? "completed" : "completed"}
         
          >
            {task.text}
          </li>
        ))}
      </ul>
    </section>
  );
  }

export default TaskDone;
