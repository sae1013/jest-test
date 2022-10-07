import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const ref = React.useRef(null);
  const [color,setColor] = useState('red');
  const [text,setText] = useState('Change to blue')
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
      <button onClick={clickButtonHandler} style={{backgroundColor:color}}>{text}</button>
    </div>
  );
}

export default App;
