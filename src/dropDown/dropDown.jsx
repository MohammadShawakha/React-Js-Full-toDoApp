import styles from "/src/dropDown/dropDown.module.css";
import { useState } from "react";

function DropDown(props) {
  const [opened, setOpened] = useState(false);
  function handelClick() {
    setOpened(!opened);
  }
  return (
    <div className={styles.dropDown}>
      <button className={styles.dropDownBtn} onClick={handelClick}>
        {props.text}
      </button>
      {opened && (
        <div className={styles.contant}>
          <a onClick={props.onEdit}>Edit</a>
          <a>Delete</a>
        </div>
      )}
    </div>
  );
}
export default DropDown;
