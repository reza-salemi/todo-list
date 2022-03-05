import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Soccer Match",
      day: "Feb 5th at 12:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Dcotor Appointment",
      day: "Feb 8th at 1:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "English Class",
      day: "Feb 9th at 5:00pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Go for Running",
      day: "Feb 10th at 6:00am",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };

  const deleteTask = (id) => setTask(tasks.filter((task) => task.id !== id));

  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To show"
      )}
    </div>
  );
}

export default App;
