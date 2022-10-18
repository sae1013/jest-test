import React from 'react'
import {useOrderDetails} from "../../hooks/scoopContext.jsx";

function ScoopOptions({ option,optionType }) {
  const optionDetailCtx = useOrderDetails();

  return (
    <div>
      <div role={"option-name"}>{option.name}</div>
      <div>
        <img name={option.name} src={option.imagePath} alt={`${option.name} scoop`}></img>
      </div>
      <input type={"number"} min={0} defaultValue={0}/>
    </div>
  )
}

export default ScoopOptions
