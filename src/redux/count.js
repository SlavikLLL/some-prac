import {createSlice} from "@reduxjs/toolkit"

export const counter = createSlice({
name:"counter",
initialState:{
  value:0,
},
reducers:{
  plus:(state) =>{
      state.value+=1
  },
  minus:(state)=>{
      state.value-=1
  },
  valueByAmount:(state,action)=>{
      state.value+=action.payload;

  }
  }
});
export const {plus,minus,valueByAmount} = counter.actions;

export default counter.reducer;