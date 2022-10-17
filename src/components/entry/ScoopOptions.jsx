import React from 'react'

function ScoopOptions({ option }) {
  return (
    <div>
      <div role={"option-name"}>{option.name}</div>
      <div>
        <img name={option.name} src={option.imagePath} alt={`${option.name} scoop`}></img>
      </div>
    </div>
  )
}

export default ScoopOptions
