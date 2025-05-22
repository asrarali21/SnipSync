import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
        snips : localStorage.getItem("snips")
        ? JSON.parse(localStorage.getItem("snips"))
        :[]
}

export const snipSlice = createSlice({
    name : 'snip',  
    initialState,
    reducers : {
        addtoSnip :(state , action) =>{
            const snip = action.payload
            state.snips.push(snip)
            localStorage.setItem("snips",  JSON.stringify(state.snips))
           toast.success ("created Successfully")
        },
        updatetoSnip : (state , action ) =>{
          

        },
        ResetAllSnip : (state , action ) =>{
            state.snips =[]
        },
         RemoveFromSnip : (state , action ) =>{
           state.snips=state.snips.filter((_, i ) => i !== action.payload)
           localStorage.setItem("snips" , JSON.stringify(state.snips))
           toast.success("deleted successfully")
           
        },
    }
})

export const { addtoSnip, updatetoSnip,ResetAllSnip,RemoveFromSnip } = snipSlice.actions
export const snipReducer = snipSlice.reducer;
export default snipSlice.reducer
