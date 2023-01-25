import React, { useEffect } from 'react'

const Grab = () => {
    const tester = async()=>{
        const tester1 = await fetch("http://localhost:27017/admin.test")
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