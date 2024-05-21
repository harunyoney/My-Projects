import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    blogs:[],
    loading: false,
    error: false,
}

const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
      state.error = false
    },
    blogSuccess: (state, { payload }) => {
      state.loading = false
      state.blogs = payload.data
      
    },




  }
});

export const {blogSuccess,fetchStart} = blogSlice.actions

export default blogSlice.reducer