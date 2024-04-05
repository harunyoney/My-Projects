import { Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products, categories } from "../../helper/data";
import { Header } from "../header/Header";
import React, { useEffect, useState } from 'react';

const ProductsList = () => {

 const [data, setData] = useState(null);
const [loading, setLoading] = useState(true)
useEffect(() => {
    const fetchData = async () => {
      try {
       
        setData(products);
        setLoading(false);
       
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        setLoading(false);
      }
    };
    

    fetchData();
  }, []);
 const [buttoneddata,Setbuttoneddata]=useState()

 useEffect(() => {
  if (!buttoneddata) {
    Setbuttoneddata("all");
  }
}, [buttoneddata]);
 
  // const [filteredproduct,Setfilteredproduct]=useState()

    if (loading) {
    return <div>Loading...</div>;
  }



  
  



  return (
    <>
    {console.log(new Date().getTime())}
      <Header  categories={categories} Setbuttoneddata={Setbuttoneddata} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3  justify-content-center">
           {data.filter(
            (item)=>buttoneddata=="all"?item:item.category==buttoneddata).map((item)=>
           (<ProductCard key={item.id} {...item} />
           ))}
           
           
             
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
