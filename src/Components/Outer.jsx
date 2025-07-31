import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Styles from './Outer.module.css';
function Outer(props){
    const [value , setValue] = useState('');

    const HandleOnChange = (event) =>{
        console.log(event.target.value);
        setValue(event.target.value);
    }

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
            <Input value={value} HandleOnChange={HandleOnChange}></Input>            
            <div className={Styles.flex}>
                {props.arr.map(ele => (
                    <Button btn={ele} key={ele} handleOnClick={handleOnClick} ></Button>
                ))}
                
            </div>
        </div>
    </>
}
export default Outer;