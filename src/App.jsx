import React,{ useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios';
import './App.css'
import ScoopOptions from "./components/entry/ScoopOptions.jsx";
import Option from "./components/entry/Option.jsx";
import {OrderDetailProvider,useOrderDetails} from './hooks/scoopContext.jsx';

function App() {
  const ctx = useOrderDetails();

  useEffect(()=>{
    axios.get('http://localhost:3030/test').then(res=>console.log(res.data))
  },[])

  return (
    <div className="App">
      <OrderDetailProvider>
        <Option optionType={"scoops"}/>
      </OrderDetailProvider>
    </div>
  )
}

export default App
