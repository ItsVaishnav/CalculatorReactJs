import Styles from './Button.module.css';
function Button({btn,handleOnClick}){
    return (
        <button className={Styles.button} onClick={()=>{handleOnClick(btn)}}>{btn}</button>
    );
}
export default Button;