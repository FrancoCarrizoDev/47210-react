import { useEffect, useState } from "react";
import useFilter from "../../hooks/useFilter";
import TaskList from "../TaskList/TaskList";
import FilterOptions from "./FilterOptions";
import { getTasks } from "../../asyncMock";

const TaskListContainer = () => {
  const [tasks, setTasks] = useState([]);

  const { filter, setFilter, applyFilter } = useFilter();

  useEffect(() => {
    getTasks().then((tasks) => {
      setTasks(tasks);
    });
  }, []);

  const filteredTasks = applyFilter(tasks);

  if (!tasks.length) return <h1>Cargando...</h1>;

  return (
    <main>
        <h1>Aplicación de Tareas</h1>
        <FilterOptions filter={filter} setFilter={setFilter} />
        <TaskList tasks={filteredTasks} />
    </main>
  );
};

export default TaskListContainer;
