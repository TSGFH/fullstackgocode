import React,{useState} from 'react'

const Button = () => {
  let [tog, setTog]=useState(true);
  return (
    <div>
      {tog ? <button onClick={()=> setTog(!tog)}>hi</button> : <button  onClick={()=> setTog(!tog)}></button>}
    </div>
  )
}

export default Button