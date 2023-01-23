import React, { useEffect } from 'react'

const Grab = () => {
    const tester = async()=>{
        const tester1 = await fetch("http://127.0.0.1:8000/api/calculator")
        const tester2 = await tester1.json()
        console.log(tester2);
    }
    useEffect(()=>{
        tester()
    },[])
  return (
    <div>

    </div>
  )
}

export default Grab