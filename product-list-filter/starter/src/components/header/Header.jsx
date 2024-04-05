import React, { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";

export const Header = ({categories,Setbuttoneddata}) => {
const [active, setActive] = useState(null)


const clicked =(e)=>{
// const []=useState()
  Setbuttoneddata(e.target.value)
  setActive(e)

 }


  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >
        {categories.map((category,i)=>{
         return <button className={category===active?"active":""} 
         onClick={()=>{clicked(category)}}
          key={i}
          value={category}
          >{category}</button>




        })  }
      </Stack>
    </Container>
  );
};
