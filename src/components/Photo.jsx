import React,{useState} from 'react'
import Katya from "../img/katya.png";
import Vesta from "../img/vesta.png";
import "./Photo.css"
const Photo = () => {
    const [photo,setPhoto] = useState(false)
  return (
    <div className='bg' >
        <div className = "photo"style={photo?{backgroundImage:`url(${Katya})`}:{backgroundImage:`url(${Vesta})`}}></div>
        <button  className = "button"onClick={()=>setPhoto(!photo)}>
            {photo?"Катенька":"Вестуля"}
        </button>

    </div>
  )
}

export default Photo