import {createContext , useContext, useState,useEffect, useMemo} from 'react';
import option from "../components/entry/Option.jsx";
import {optionInfo} from '../utils/productInfo.js';

const OrderDetailCtx = createContext({});

export function useOrderDetails(){
  const context = useContext(OrderDetailCtx);

  if(!context){
    console.log('context',context)
    throw new Error('Context Api was not set');
  }

  return context;
}

const calculateTotal = (orderType,state) => {
  let totalCount = 0
  for(const optionCount of state[orderType].values()) {
    totalCount+=optionCount
  }
  return totalCount * optionInfo[orderType]
}

export function OrderDetailProvider(props) {
  const [optionCountState,setOptionCountState] = useState({
    scoops: new Map(), // scoops: {vanila:1}
    toppings: new Map()
  })

  const [totals,setTotal] = useState({
    scoops: 0,
    toppings:0,
    total:0
  })

  useEffect(() => {
    const scoopsTotal = calculateTotal("scoops",optionCountState);
    const toppingsTotal = calculateTotal("toppings",optionCountState);
    const total = scoopsTotal + toppingsTotal;
    setTotal({
      scoops:scoopsTotal,
      toppings:toppingsTotal,
      total
    })
  },[optionCountState])

  const updateItemCount = (optionName,newItemCount, optionType) => {
    const newOptionsCount = {...optionCountState}

    const optionCountsMap = newOptionsCount[optionType] ;
    optionCountsMap.set(optionName, parseInt(newItemCount));

    setOptionCountState(newOptionsCount)
  }

  const value = useMemo(() => {

    return {
      optionCountState: {...optionCountState},
      totals:totals,
      updateItemCount:updateItemCount
    }
  },[optionCountState,totals])

  return <OrderDetailCtx.Provider value = {value} {...props}/>
}

