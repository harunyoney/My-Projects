import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"
import { arttır } from "../../store/counterReducer"


const Counter = () => {
  const count =useSelector((state)=>{return (state.count)})
 

  const dispatch=useDispatch()


  

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button className="counter-button positive" onClick={()=>dispatch(arttır())}>increase</button>
        <button className="counter-button zero" onClick={()=>dispatch({type:"SIFIR"})}>reset</button>
        <button className="counter-button negative" onClick={()=>{
          if(count>0){
          dispatch({type:"EKSİ"})}}}>decrease</button>
      </div>
    </div>
  )
}

export default Counter
