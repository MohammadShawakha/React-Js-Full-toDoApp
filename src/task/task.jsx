import styles from "/src/task/task.module.css";
import { useState } from "react";
import DropDown from "../dropDown/dropDown.jsx";
function Task(props) {
  return (
    <div
      className={styles.taskRow}
      draggable
      onDragStart={props.onDraged}
      onDragEnter={props.onDragedOver}
      onDragEnd={props.onEnd}
    >
      <input type="checkbox" />
      <label>{props.taskText}</label>
      <DropDown text="&#65049;" onEdit={props.onEditTask} />
    </div>
  );
}
export default Task;
