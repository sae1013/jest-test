import React,{useRef} from 'react'
import {useOrderDetails} from "../../hooks/scoopContext.jsx";

function ScoopOptions({ option,optionType }) {
  const {updateItemCount,totals,optionCountState} = useOrderDetails();
  const inputRef = useRef();

  const handleAmount = () => {
    const inputValue = parseInt(inputRef.current.value)

    updateItemCount(option.name,inputValue,optionType);
  }

  return (
    <div>
      <div role={"option-name"}>{option.name}</div>
      <div>
        <img name={option.name} src={option.imagePath} alt={`${option.name} scoop`}></img>
      </div>
      <input role={option.name} ref={inputRef} onChange = {()=>handleAmount()} type={"number"} min={0} defaultValue={0}/>

    </div>
  )
}

export default ScoopOptions
