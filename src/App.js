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
    }else {
      setColor('red')
    }
  }
  const backgroundColor = disabled ? 'gray' : color
  return (
    <div className="App">
      <button disabled={disabled} onClick={clickButtonHandler} style={{backgroundColor:backgroundColor}}>{'버튼'}</button>
      <input id = {'checkbox'} aria-checked={disabled} type="checkbox" onClick={(e)=>{
        setDisabled(!disabled)
      }}></input>
      <label></label>
    </div>
  );
}

export default App;
