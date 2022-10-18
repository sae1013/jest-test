import React from 'react';
import {useOrderDetails} from "../../hooks/scoopContext.jsx";

function OptionDetail() {
  const {totals} = useOrderDetails();

  return (
    <div>
      <span style={{display:"block"}}>total option Amount: {totals.total}$</span>
      <span style={{display:"block"}}>scoop toption Amount: {totals.scoops}$</span>
      <span style={{display:"block"}}>topping toption Amount: {totals.toppings}$</span>
    </div>
  );
}

export default OptionDetail;