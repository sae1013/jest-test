import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios';
import './App.css'

function App() {
  useEffect(()=>{
    axios.get('http://localhost:3030/test').then(res=>console.log(res.data))
  },[])
  return (
    <div className="App" role={"main"}>
      {/*<button role="tab" aria-selected={"true"}>React</button>*/}
      <button>submit</button>
    </div>
  )
}

export default App
