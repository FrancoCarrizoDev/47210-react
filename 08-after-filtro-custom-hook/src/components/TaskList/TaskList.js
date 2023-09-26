import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text} - {task.completed ? 'Completada' : 'Pendiente'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;