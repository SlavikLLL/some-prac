import React,{useState} from 'react'

const Toogle = () => {
    const [toogle,setToogle] = useState(false)
  return (
    <button onClick={()=>setToogle(!toogle)}>
        {toogle?"no":"yes"}
    </button>
  )
}

export default Toogle