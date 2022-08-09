import React,{useState} from 'react'

const Count = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>+</button>
    <button onClick={()=>setCount(count-1)}>-</button>
    <button onClick={()=>setCount(0)}>restart</button>
    </div>
  )
}

export default Count