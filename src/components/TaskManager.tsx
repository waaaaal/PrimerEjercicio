import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import NavigationMenu from "./Navigationmenu";
function TaskManager(): JSX.Element {
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default TaskManager;
