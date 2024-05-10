import { createSlice } from "@reduxjs/toolkit";
const initialState={
   purchases:[],
   sales:[],
   firms:[],
   products:[],
   brands:[],
   categories:[],
   loading:false,
   error:false,
}

const stockSlice=createSlice({
    name:"",
    initialState:initialState,
    reducers:{
        fetchStart:(state)=>{
            state.loading=true
        },
        fetchSuccess:(state,{payload})=>{
            state.loading=false,

        },
        fetchFail:(state)=>{
            state.loading=false,
            state.error=true
        },

    },
})