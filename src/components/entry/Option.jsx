import React,{useEffect,useState} from 'react';
import axios from 'axios';
import ScoopOptions from "./ScoopOptions";

function Options({optionType}) {
  const [options,setOptions] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/${optionType}`).then((res) => setOptions(res.data))
  },[optionType])

  const ItemComponent = optionType ==='scoops' ? ScoopOptions : null ;

  return (
    <div>
      {
        options.map((option,index) => <ItemComponent key = {index} option = {option}></ItemComponent>)
      }
    </div>
  );
}

export default Options;