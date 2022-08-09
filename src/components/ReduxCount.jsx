import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { minus, plus, valueByAmount, } from '../redux/count';

const ReduxCount = () => {
  const {value} = useSelector(state=>state.value)
  const dispatch = useDispatch()
  return (
    
    <div>
      <div>Counter is:{value}</div>
      <button onClick={()=>dispatch(plus())}>plus</button>
      <button onClick={()=>dispatch(minus())}>minus</button>
      
      <button onClick={()=>dispatch(valueByAmount(33))}>33</button>
    </div>
  )
}

export default ReduxCount