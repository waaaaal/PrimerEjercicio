import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask } from "../features/tasks/taskSlice";

interface Task {
  text: string;
  completed: boolean;
}

function TaskList(): JSX.Element {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleCompleted = (index: number): void => {
    dispatch(toggleTask(index));
  };

  return (
    <section className="tasks">
      <ul className="task-list">
        {tasks.map((task: Task, index: number) => (
          <li
            key={index}
            className={task.completed ? "completed" : ""}
            onClick={() :void  => handleCompleted(index)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
