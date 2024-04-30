

// const initialState = {
//     count:0,
// }
export const arttır=()=>{
  
    return ({type:"ARTI"})

  }

export const counterReducer = (state = {count:0}, action) => {
    // {type,payload}
  switch (action.type) {

  case "EKSİ":
    return { count :state.count -1}
  case "ARTI":
    return { count :state.count +1}
  case "SIFIR":
    return { count :0}


  default:
    return state
  }
}

