import styles from "/src/task/task.module.css";
import Btn1 from "/src/btn1/btn1.jsx";
function Task(props) {
  return (
    <div className={styles.taskRow}>
      <input type="checkbox" /> <label>{props.taskText}</label>
      <Btn1 text="&#65049;" />
    </div>
  );
}
export default Task;
