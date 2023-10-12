import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[]
    },
    reducers:{
        addToCart:(state,action)=>{
           state.item.push(action.payload)
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer;