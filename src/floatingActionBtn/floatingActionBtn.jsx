import styles from "/src/floatingActionBtn/floatingActionBtn.module.css";

function FloatingActionBtn(props) {
  return (
    <button onClick={props.do} className={styles.floatingActionBtn}>
      {props.text}
    </button>
  );
}
export default FloatingActionBtn;
