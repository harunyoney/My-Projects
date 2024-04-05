import Doctors from "../compenants/Doctors"
import Container from "react-bootstrap/Container"
import {doctorData} from "../helper/data.jsx"
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from "react";
import AddModal from "../compenants/AddModal.jsx";
const  Home =()=>{
  const [show, setShow] = useState(false);
    const handleShow=()=>setShow(true)
const [randevu,setRandevu]=useState(
    []

)
console.log(randevu);

return  ( 
<Container className="text-center">
    <h1>HAR-UN HOSPITAL</h1>
    <h3>Our Doctors</h3>
    
     <Row xs={1} sm={1} md={2} lg={3} xl={4}>
    {
        doctorData.map((doctor)=><Doctors  key={doctor.id} show={show} handleShow={handleShow} setShow={setShow}  {...doctor}/> 

)
       
    }
    {/* name={name} */}
   </Row>
    <AddModal show={show}  setShow={setShow}  setRandevu={setRandevu}  randevu={randevu}/>
</Container>
)
}

export default Home