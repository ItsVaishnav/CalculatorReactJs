import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Styles from './Outer.module.css';
function Outer(props){
    const [value , setValue] = useState('');
    const handleOnClick = (item) =>{
        if(item === '='){
            let newValue = eval(value);
            setValue(newValue);
        }else if(item === 'C'){
            setValue('');
        }else{
            let newValue = value + item;
            setValue(newValue);
        }
        console.log("Clicked : "+item);
    }
    return <>
        <div className={Styles.container}>
            <Input value={value}></Input>            
            <div className={Styles.flex}>
                {props.arr.map(ele => (
                    <Button btn={ele} handleOnClick={handleOnClick}></Button>
                ))}
                
            </div>
        </div>
    </>
}
export default Outer;