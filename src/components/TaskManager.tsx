import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import NavigationMenu from "./Navigationmenu";
function TaskManager(): JSX.Element {
  return (
    <>
      <main>
        <div className="container-wrapper main-content">
          <TaskForm />
          <TaskList />
        </div>
      </main>
    </>
  );
}

export default TaskManager;
