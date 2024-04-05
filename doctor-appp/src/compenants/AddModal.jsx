import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddModal({show,setShow,setRandevu,randevu}) {
    
    const [name,Setname]=useState({
        name:"",
        date:""
    })
    
   console.log(name);
  
 const handleClose=()=>setShow(false)

  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for <span className='text-danger'></span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                value={name.name}
                onChange={(e)=>Setname({...name,name:e.target.value})}
                autoFocus
                
              />
            </Form.Group>
           <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date / Time</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder=""
                value={name.date}
                onChange={(e)=>Setname({...name,date:e.target.value})}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant="danger" onClick={()=>{
            console.log("object")
            alert("form başarıyla gönderildi")
            setRandevu([...randevu,name])
            console.log();
            handleClose()
          }
            }>
            Submit
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default AddModal