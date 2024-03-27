import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from "../assets/nba-logo.png";
import { useState } from 'react';
import { data } from '../helper/data';
import CardContainer from './CardContainer';



const  Header =({data})=>{

   
    let filtered=[]
 const [input, setinput] = useState(data)

    



    const inputsad=(e)=>{        
        const input2=e.target.value
         filtered=  data.filter((e)=>e.name.includes(input2))
            // console.log(filtered)

     setinput(filtered)


    }

     
// console.log(degisken);
    return  ( 
       <div className='header container d-flex justify-content-center flex-column align-items-center '>
        <img src={logo} alt="" />
        <h1>NBA Legends</h1>
        <input  type="search" placeholder='Search Player' onInput={inputsad}/>
        <CardContainer data={input}/>

       </div>
    )
}

export default Header