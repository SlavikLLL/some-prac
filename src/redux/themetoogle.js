import {createSlice} from "@reduxjs/toolkit";


export const themeToogle = createSlice({
    name:"themeToogle",
    initialState:{
        isToogle:false
    },
    reducers:{
        switchToogle:(state)=>{
            state.isToogle=!state.isToogle;
        }
    }
})

export const {switchToogle} = themeToogle.actions;

export default themeToogle.reducer;