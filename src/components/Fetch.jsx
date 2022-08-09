import React,{useState,useEffect} from 'react'


const Fetch = () => {
    const delay = ms=>{
        return new Promise(resolve=>{
            setTimeout(() => resolve(),ms);
        })
    }
    const [items,setItems] = useState([]);
    const [error,setError] = useState(null);
    const [isLoaded,setLoaded] = useState(false);
    useEffect(()=>{
      async function Fetch(){
        await delay(5000)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(
            (result)=>{
                setItems(result);
                setLoaded(true);
            },
            (error)=>{
                setError(error);
                setLoaded(true)
            }


        )
      }
      Fetch()  
    })
  if(error){
    return <div>{error}</div>
  }else if(!isLoaded){
    return <div>Loading....</div>
  }else {
    return(
        <ul>
            {items.map(item=>(
                <li key={item.id}>
                    {item.name}

                </li>
            ))}
        </ul>
    )
  }
}

export default Fetch


    