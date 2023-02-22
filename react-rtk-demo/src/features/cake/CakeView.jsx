import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { ordered, restocked } from "./cakeSlice";
export const CakeView = () => {
    const numOfCakes=useSelector((state)=>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
      <div>Number of cake s -{numOfCakes}</div>
      <button onClick={()=>dispatch(ordered())}>Order cake</button>
      <button onClick={()=>dispatch(restocked(5))}>Restock cakes</button>
    </div>
  );
};
