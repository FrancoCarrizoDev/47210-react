export const TaskList = ({ task }) => {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {task.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
