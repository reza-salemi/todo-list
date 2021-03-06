import styles from "./TaskFilter.module.css";

const TaskFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={styles["tasks-filter"]}>
      <div className={styles["tasks-filter__control"]}>
        <label>Filter Task</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="compeleted">compeleted</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
