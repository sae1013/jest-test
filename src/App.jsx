import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios';
import './App.css'
import ScoopOptions from "./components/entry/ScoopOptions.jsx";
import Option from "./components/entry/Option.jsx";

function App() {
  useEffect(()=>{
    axios.get('http://localhost:3030/test').then(res=>console.log(res.data))
  },[])
  return (
    <div className="App">
      {/*<button role="tab" aria-selected={"true"}>React</button>*/}
      <button>submit</button>
      <Option optionType={"scoops"}/>
    </div>
  )
}

export default App
