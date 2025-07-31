import Button from './Button';
import Input from './Input';
import Styles from './Outer.module.css';
function Outer(props){
    return <>
        <div className={Styles.container}>
            <Input></Input>            
            <div className={Styles.flex}>
                {props.arr.map(ele => (
                    <Button value={ele}></Button>
                ))}
                
            </div>
        </div>
    </>
}
export default Outer;