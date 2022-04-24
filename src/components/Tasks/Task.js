import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  const filterDate = (date) => {
    if (date.includes("T")) {
      let options = {
        weekday: "short",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const formatDate = new Date(date)
        .toLocaleString("en-US", options)
        .split(",");
      const newDate = formatDate.splice(0, 2) + " at" + formatDate.at(-1);
      return newDate;
    } else {
      return date;
    }
  };
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{filterDate(task.day)}</p>
    </div>
  );
};

export default Task;
