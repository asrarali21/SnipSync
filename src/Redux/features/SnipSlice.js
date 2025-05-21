import { createSlice } from "@reduxjs/toolkit";

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
           
        },
        updatetoSnip : (state , action ) =>{
              
        },
        ResetAllSnip : (state , action ) =>{
            
        },
         RemoveFromSnip : (state , action ) =>{
            
        },
    }
})

export const { addtoSnip, updatetoSnip,ResetAllSnip,RemoveFromSnip } = snipSlice.actions
export const snipReducer = snipSlice.reducer;
export default snipSlice.reducer
