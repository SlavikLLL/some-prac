import React,{useState} from 'react'

const Theme = () => {
    const [color,setColor] = useState(false);
  return (
    <div  style={color?{background:"white"}:{background:"black"}}>
        <button onClick={()=>setColor(!color)}>
            {color?"white":"black"}
        </button>

    </div>
  )
}

export default Theme