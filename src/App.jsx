import Outer from "./Components/Outer"
import './App.css';
import Heading from "./Components/Heading";
function App() {
  let arr = ['C','+','-','*','/','%',1,2,3,4,5,6,7,8,9,'.',0,'=']
  return (
    <>
    <Heading heading="Calculator"/>
      <Outer arr={arr}/>
    </>
  )
}
export default App
