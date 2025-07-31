import styles from './Input.module.css';
function Input({value, HandleOnChange}){
  return <input type="text" className={styles.width} value={value} onChange={()=>{HandleOnChange(event)}} readOnly></input>;
}
export default Input;