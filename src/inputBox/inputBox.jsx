import styles from "/src/inputBox/inputBox.module.css";

function InputBox(props) {
  return (
    <div>
      <input
        type="text"
        value={props.inputProp}
        onChange={props.handeInputChangeProp}
      />

      <button onClick={props.newTaskOnClick}>New Task</button>
      <button onClick={props.cancelOnClick}>cancel</button>
    </div>
  );
}
export default InputBox;
