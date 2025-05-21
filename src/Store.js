import { configureStore } from "@reduxjs/toolkit";
import {snipReducer} from './Redux/features/SnipSlice'
export const  store = configureStore({
    reducer:{
      snip : snipReducer
    }
}) 