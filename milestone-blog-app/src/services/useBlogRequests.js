import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useAxios from './useAxios'
import { fetchStart, getBlogsSuccess, getCategoriesSuccess } from '../features/blogsSlice'

const useBlogRequests = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {axiosToken, axiosPublic} = useAxios()

    const getBlogs = async ()=> {
        dispatch(fetchStart())
        try {
            const res = await axiosPublic("/blogs/?limit=2&page=2")
            console.log(res)
            dispatch(getBlogsSuccess(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    const getCategories = async ()=> {
        dispatch(fetchStart())
        try {
            const {data:{data}} = await axiosPublic("/categories")
            console.log(data)
            const categories = data.map(item=> item.name)
            dispatch(getCategoriesSuccess(categories))
        } catch (error) {
            console.log(error)
        }
    }




  return {getBlogs, getCategories}
}

export default useBlogRequests