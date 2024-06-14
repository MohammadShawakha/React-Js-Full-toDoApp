import styles from "/src/dropDown/dropDown.module.css";
import { useState } from "react";

function DropDown(props) {
  const [opened, setOpened] = useState(false);
  function handelClick() {
    setOpened(!opened);
  }
  return (
    <div className={styles.dropDown} onMouseLeave={handelClick}>
      <button className={styles.dropDownBtn} onMouseOver={handelClick}>
        {props.text}
      </button>
      {opened && (
        <div className={styles.contant}>
          <a
            onClick={() => {
              props.onEdit();
              handelClick();
            }}
          >
            Edit
          </a>
          <a
            onClick={() => {
              props.onDelete();
              handelClick();
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
