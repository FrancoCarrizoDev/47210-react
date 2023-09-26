import Filter from "./Filter";
import { TaskList } from "./TaskList";

export const Container = () => {
  const tasks = [
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: true },
    { id: 5, title: "Task 5", completed: true },
  ];

  return (
    <div>
      <Filter>
        {(filter, handleFilterChange) => {
          console.log(filter);
          return (
            <div>
              <label htmlFor="filter">Filtrar por estado:</label>
              <select name="filter" id="filter" onChange={handleFilterChange}>
                <option value="all">Todos</option>
                <option value="completed">Completados</option>
                <option value="uncompleted">No completados</option>
              </select>
              <TaskList
                task={
                  filter === "all"
                    ? tasks
                    : tasks.filter((task) =>
                        filter === "completed"
                          ? task.completed
                          : !task.completed
                      )
                }
              />
            </div>
          );
        }}
      </Filter>
    </div>
  );
};
