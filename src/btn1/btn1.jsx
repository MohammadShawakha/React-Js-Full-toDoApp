import styles from '/src/btn1/btn1.module.css'

function Btn1(props){
    return(
        <button className={styles.btn1}>{props.text}</button>
    );
}
export default Btn1