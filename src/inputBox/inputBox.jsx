import styles from "/src/inputBox/inputBox.module.css";

function InputBox(props) {
  return (
    <>
      <div className={styles.overLay} onClick={props.cancelOnClick}>
        <div className={styles.floatingContainer}>
          <input
            type="text"
            value={props.inputProp}
            onChange={props.handelInputChangeProp}
            autoFocus
          />
          <span>
            <button onClick={props.newTaskOnClick}>
              {props.actionBtnText}
            </button>
            <button onClick={props.cancelOnClick}>cancel</button>
          </span>
        </div>
      </div>
    </>
  );
}
export default InputBox;
