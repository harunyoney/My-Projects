import productPrint from "./src/product.mjs";

// selectors
export const btnDivs = document.getElementById("btns");
export const productDivs = document.getElementById("products");
export const searchInput = document.getElementById("searchInput");
export const categoryTitle = document.getElementById("category");
export const modalBody = document.querySelector(".modal-body")


const getProducts=async()=>{

try {
    const URL="https://anthonyfs.pythonanywhere.com/api/products/"
    const res =await fetch(URL)
    
   if(!res.status) {
    throw new Error(`${res.status}`)}
    const data=await res.json()
    productPrint(data)
    console.log(data);

   }catch (error) {console.error(error)}
  
    

}


document.addEventListener("DOMContentLoaded",getProducts())





