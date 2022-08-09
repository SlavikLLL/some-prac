import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { switchToogle } from '../redux/themetoogle';


const ThemRedux = () => {
    const {isToogle} = useSelector(state=>state.themeToogle);
    const dispatch = useDispatch();
  return (
    <div style={isToogle?{background:"white"}:{background:"black"}}>
        <button onClick={()=>dispatch(switchToogle())}>
            {isToogle?"white":"black"}
        </button>
    </div>
  )
}

export default ThemRedux