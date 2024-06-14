import styles from "/src/task/task.module.css";
import { useRef, useState } from "react";
import DropDown from "../dropDown/dropDown.jsx";
import InputBox from "/src/inputBox/inputBox.jsx";

function Task(props) {
  const [visbel, setVisbel] = useState(false);
  const [input, setInput] = useState(props.taskText);

  const index = props.taskIndex;

  function handelInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      {visbel && (
        <InputBox
          actionBtnText="Edit"
          newTaskOnClick={() => {
            props.handelEdit(index, input);

            setVisbel(false);
          }}
          cancelOnClick={() => {
            setInput(props.taskText);
            setVisbel(false);
          }}
          inputProp={input}
          handelInputChangeProp={handelInputChange}
        />
      )}
      <div
        className={styles.taskRow}
        draggable
        onDragStart={props.onDraged}
        onDragEnter={props.onDragedOver}
        onDragEnd={props.onEnd}
      >
        <input type="checkbox" />
        <label>{props.taskText}</label>
        <DropDown
          text="&#65049;"
          onEdit={() => {
            setVisbel(true);
            setInput(props.taskText);
          }}
          onDelete={() => props.handelDelete(index)}
        />
      </div>
    </>
  );
}
export default Task;
