import styles from "/src/dropDown/dropDown.module.css";
import { useState } from "react";

function DropDown(props) {
  const [opened, setOpened] = useState(false);
  function handelClick() {
    setOpened(true);
  }
  function handelLeave() {
    setOpened(false);
  }
  return (
    <div className={styles.dropDown} onMouseLeave={handelLeave}>
      <button className={styles.dropDownBtn} onMouseOver={handelClick}>
        {props.text}
      </button>
      {opened && (
        <div className={styles.contant}>
          <a
            onClick={() => {
              props.onEdit();
              handelLeave();
            }}
          >
            Edit
          </a>
          <a
            onClick={() => {
              props.onDelete();
              handelLeave();
            }}
          >
            Delete
          </a>
        </div>
      )}
    </div>
  );
}
export default DropDown;
