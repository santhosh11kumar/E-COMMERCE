import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";


export const store = configureStore({
    //  list all the functions and slices 
    // in slice function name given : slice function's name

    reducer:
    {
        FirstSlice: CartSlice.reducer,
    }

})