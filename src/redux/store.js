import {configureStore} from "@reduxjs/toolkit";
import  counter  from "./count";
import  themeToogle  from "./themetoogle";

export default configureStore({
    reducer:{
        counter:counter,
        themeToogle:themeToogle
    }
})

