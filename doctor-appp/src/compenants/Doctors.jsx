import React from 'react'
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import AddModal from './AddModal';
import { useEffect } from 'react';


const Doctors = ({name,dep,img,show,setShow,handleShow}) => {
   


  return (
  <>
        
     
        <Col  >
        <img onClick={()=>handleShow()}  src={img} alt={name} width="100%"/>
       
        <h3>{name}</h3>
        <p>{dep}</p>
        
        </Col>
        
   </>
    
  
  )
}

export default Doctors