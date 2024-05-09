import { useEffect } from "react"
import useStockRequest from "../services/useStockRequest"
import { useSelector } from "react-redux"

const Products = () => {
  const { getDatas } = useStockRequest()
  const {products} = useSelector((state) => state.getData)
  console.log(products)
  useEffect(() => {
    getDatas("products")
    
  }, [])

  return <div>products</div>
}

export default Products
