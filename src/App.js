import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const ref = React.useRef(null);
  const [color,setColor] = useState('red');
  const [text,setText] = useState('Change to blue')
  const [disabled,setDisabled] = useState(false);
  const clickButtonHandler =  () => {
    if(color === 'red') {
      setColor('blue');
      setText('Change to red')
    }else {
      setColor('red')
      setText('Change to blue')
    }
  }
  return (
    <div className="App">
      <button disabled={disabled} onClick={clickButtonHandler} style={{backgroundColor:color}}>{text}</button>
      <input type="checkbox" onClick={()=>{
        setDisabled(!disabled)
      }}></input>
    </div>
  );
}

export default App;
