import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import "date-fns";
import { DateTimePicker } from "@material-ui/pickers";
import styles from "./AddTask.module.css";
import Button from "../UI/Button";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState(false);
  const [day, setDay] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a task");
    }

    onAdd({ text, day, reminder });

    setText("");
    setReminder(false);
  };
  return (
    <form className={styles["add-form"]} onSubmit={onSubmit}>
      <div className={styles["form-control"]}>
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={styles["form-control"]}>
        <label>Day & time</label>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            disableToolbar
            variant="inline"
            value={day}
            onChange={(day) => {
              setDay(day);
            }}
            autoOk
          />
        </MuiPickersUtilsProvider>
      </div>
      <div
        className={`${styles["form-control"]} ${styles["form-control-check"]}`}
      >
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <Button type="submit" text="Add Task" />
    </form>
  );
};

export default AddTask;
