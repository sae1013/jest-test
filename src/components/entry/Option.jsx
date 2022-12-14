import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ScoopOptions from "./ScoopOptions";
import {useOrderDetails} from "../../hooks/scoopContext.jsx";
import OptionDetail from "./OptionDetail.jsx";

function Options({optionType}) {
  const [options, setOptions] = useState([])
  const [error,setError] = useState(null);
  const {total} = useOrderDetails();

  useEffect(() => {
    axios.get(`http://localhost:3000/${optionType}`)
      .then((res) => setOptions(res.data))
      .catch((error) => {
        setError(error.response.data.message)
      })
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : null;

  if(error) {
    return <div role={"error-alert"}>{error}</div>
  }
  return (
    <div>
      {
        options.map((option, index) => <ItemComponent key={index} option={option} optionType={"scoops"}></ItemComponent>)
      }
      <OptionDetail></OptionDetail>
    </div>

  );
}

export default Options;