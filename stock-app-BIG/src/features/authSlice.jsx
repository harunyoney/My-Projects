import { createSlice } from "@reduxjs/toolkit"
  const initialState={
    token:"",
    user:"",
    loading:false,
    error:false,
  }



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart:(state)=>{
      state.loading=true
    },
    loginSuccess:(state,{payload})=>{
      state.loading=false;
      state.user=payload.user.username;
      state.user=payload.token;

    },
    fetchFail:(state)=>{
      state.loading=false;
      state.error=true
    }
  },
})

export const {} = authSlice.actions
export default authSlice.reducer
export const {fetchStart,loginSuccess,fetchFail}=authSlice.actions
