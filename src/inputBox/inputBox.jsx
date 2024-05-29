import styles from "/src/inputBox/inputBox.module.css";

function InputBox(props) {
  return (
    <>
      <div className={styles.overLay} onClick={props.cancelOnClick}></div>{" "}
      <div className={styles.floatingContainer}>
        <input
          type="text"
          value={props.inputProp}
          onChange={props.handeInputChangeProp}
          autoFocus
        />
        <span>
          <button onClick={props.newTaskOnClick}>New Task</button>
          <button onClick={props.cancelOnClick}>cancel</button>
        </span>
      </div>
    </>
  );
}
export default InputBox;
