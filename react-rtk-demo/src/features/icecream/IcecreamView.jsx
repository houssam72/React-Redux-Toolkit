import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const numOfIcecrem = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch=useDispatch()
  return (
    <div>
      <div>Number of ice creams:{numOfIcecrem}</div>
      <button onClick={()=>dispatch(ordered())}>Order ice cream</button>
      <button onClick={()=>dispatch(restocked(3))}>Restock ice cream</button>
    </div>
  );
};
