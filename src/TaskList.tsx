import React from "react";
interface Task {
  text: string;
  completed: boolean;
}

interface TaskListProps  {
  tasks: Task[];
  handleCompleted: (index:number) => void
}

function TaskList({ tasks, handleCompleted }: TaskListProps):JSX.Element {



  return (
    <section className="tasks">
      <ul className="task-list">
        {tasks.map((item, index) => (
        <li className={item.completed ? 'completed' : ''}onClick={() => handleCompleted(index)} >
           {item.text } 
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;

