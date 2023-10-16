function TaskList({ tasks }) {
  const handleListChange = () => {};
  return (
    <section className="tasks">
      <ul className="task-list">
        {tasks.map((item, index) => (
          <li onClick={handleListChange} key={index}>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
