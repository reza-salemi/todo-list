const TaskFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="tasks-filter">
      <div className="tasks-filter__control">
        <label>Filter Task</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="uncompelete">Uncompelete</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
