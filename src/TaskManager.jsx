import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { tasks as data } from "./tasks";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, { text: task }]);
  }

  return (
    <main>
      <div className="container-wrapper main-content">
        <TaskForm createTask={createTask} />
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}

export default TaskManager;
