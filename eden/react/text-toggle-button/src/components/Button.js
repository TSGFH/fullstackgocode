import React,{useState,useEffect} from 'react'

const Button = () => {

    let [toggle,setToggle]=useState('hi');

    useEffect(()=>{
        // setToggle('hi')
        // console.log("it changed to somthing");
        if(toggle === ''){
            setToggle("hi")
            console.log("it changed to somthing")
        }
    },[toggle])
    
  return (
    <div>
        <button onClick={()=>{setToggle(''); console.log("it has changed to nothing")}}>{toggle}</button>
    </div>
  )
}

export default Button