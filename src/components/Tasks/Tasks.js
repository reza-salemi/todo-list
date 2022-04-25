import { useState } from "react";
import Task from "./Task";
import TaskFilter from "./TaskFilter";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  const [filtredStatus, setFilteredStatus] = useState("all");

  const filterChangeHandler = (selectedStatus) => {
    setFilteredStatus(selectedStatus);
  };

  const filteredTasks = tasks.filter((task) => {
    if (task.status === "") {
      console.log(tasks);
    }
    return task.status === filtredStatus;
  });

  return (
    <>
      <TaskFilter
        selected={filtredStatus}
        onChangeFilter={filterChangeHandler}
      />
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
