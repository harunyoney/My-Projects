import { useState,useEffect } from "react"
import axios from 'axios';
import Header from "./Header";
import Products from "./Products";

const Page = () => {
    const getData= async ()=>{
       try { 
        const data= await axios.get("https://6618ab7b9a41b1b3dfbda8c4.mockapi.io/project-products")
        setData(data.data)
       } catch (error) {
        console.log(error);
       }
      }
    const [data, setData] = useState([])

    useEffect(() => {
      
    getData()
      
    }, [])
    

console.log(data);




  return (
    <>
      <Header/>
      <Products/>
      
      <button onClick={()=>{console.log(data);}}>page</button>
    </>
  )
}

export default Page