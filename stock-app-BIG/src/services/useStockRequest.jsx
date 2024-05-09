import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { fetchFail, fetchStart, getDataSuccess } from "../features/getSlice"

const useStockRequest = () => {
  const { axiosToken, axiosPublic } = useAxios()
  const dispatch = useDispatch()

  const getDatas = async (endpoint) => {
     dispatch(fetchStart())
    try {
      const { data } = await axiosToken(`/${endpoint}`)
      console.log(data)
         dispatch(getDataSuccess({key:endpoint, data}))
    } catch (error) {
         dispatch(fetchFail())
      console.log(error)
    }
  }

  const deleteDatas = async (endpoint, id) => {
    dispatch(fetchStart())
    console.log(id)
    try {
      await axiosToken.delete(`/${endpoint}/${id}`)
      
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

  return { getDatas, deleteDatas }
}

export default useStockRequest
