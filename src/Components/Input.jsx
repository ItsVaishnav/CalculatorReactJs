import styles from './Input.module.css';
function Input({value}) {
  return <input type="text" className={styles.width} value={value}></input>;
}
export default Input;
