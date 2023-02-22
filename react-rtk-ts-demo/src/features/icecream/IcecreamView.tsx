import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { ordered, restocked } from "./icecreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const IcecreamView = () => {
  // const numOfIcecrem = useSelector((state) => state.icecream.numOfIcecreams);
  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecreams);

  // const dispatch=useDispatch()
  const dispatch=useAppDispatch()

  return (
    <div>
      <div>Number of ice creams:{numOfIcecream}</div>
      <button onClick={()=>dispatch(ordered())}>Order ice cream</button>
      <button onClick={()=>dispatch(restocked(3))}>Restock ice cream</button>
    </div>
  );
};
