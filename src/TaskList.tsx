import React from "react";
interface Task {
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  handleCompleted: (index:number) => void
}

function TaskList({ tasks, handleCompleted }: TaskListProps) {


  console.log("Tareas en TaskList:", tasks);

  return (
    <section className="tasks">
      <ul className="task-list">
        {tasks.map((item, index) => (
        <li className={item.completed ? 'complete' : 'noCompleted'}onClick={() => handleCompleted(index)} >
           {item.text } 
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;

