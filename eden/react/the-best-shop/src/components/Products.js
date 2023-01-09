import React,{useState,useEffect} from 'react'
import Filter from './Filter';
import './Products.css'
const Products = () => {
  const [getPro, setGetPro]= useState([]);
  const GetFake = async () =>{
    const test = await fetch("https://fakestoreapi.com/products")
    const test2 = await test.json()
    setGetPro(test2)
    
  }
  useEffect(()=>{
    GetFake()
  },[])


  const incerment = (id) =>{
    const cloneData = [...getPro]
    const chosenProductIndex = cloneData.findIndex(p => p.id === id)
    cloneData[chosenProductIndex].amount > 0 ? cloneData[chosenProductIndex].amount += 1 : cloneData[chosenProductIndex].amount = 1
    setGetPro(cloneData)

}
const decerment = (id) =>{
  const cloneData = [...getPro]
  const chosenProductIndex = cloneData.findIndex(p => p.id === id)
  cloneData[chosenProductIndex].amount > 0 ? cloneData[chosenProductIndex].amount -= 1 : cloneData[chosenProductIndex].amount = 0
  setGetPro(cloneData)
}


  return (
    <div className='test2'>
      <div className='test4'>
        <Filter/>
        </div>
      
        {getPro.map((e)=>
      <div className='test1'>
        <h6>{e.title}</h6>
        <img width={100} height={100} src={e.image} alt=''></img>
        <h6>{e.price}$</h6>
        <h6>{e.category}</h6>
        <h6>Rating {e.rating.rate} Count {e.rating.count}</h6>
        <div className='test3'>
        <button onClick={() => incerment(e.id)}>+</button>
                <h1>{e.amount ? e.amount : 0}</h1>
                <button onClick={() => decerment(e.id)}>-</button> 
        </div>
        
      </div>
      )}
      
    </div>
  )
}

export default Products