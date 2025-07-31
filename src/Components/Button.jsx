import Styles from './Button.module.css';

function Button(props){
    return (
        <button className={Styles.button}>{props.value}</button>
    );
}

export default Button;