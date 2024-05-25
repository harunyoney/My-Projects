import { Container } from '@mui/material'
import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';

interface ITodoType{
    task: string;
    isDone:boolean;
    id:string | number;
    any?:string
}


const Main = () => {
    const [todos,setTodos] = useState<ITodoType[]>([])

    const getTodos=async ()=>{
        try {
            const {data}=await axios<ITodoType[]>("s")
        } catch (error) {
            console.log(error);
        }
    }

  return (
   <Container>
    <Header/>
   </Container>
  )
}

export default Main