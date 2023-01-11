import React,{useState,useEffect} from 'react'
import Filter,{supa2} from './Filter';
import './Products.css'
export let supa = '';
const Products = () => {
   const [getPro, setGetPro]= useState([]);
   const [products, setProducts] = useState(getPro)
  const GetFake = async () =>{
    const test = await fetch("https://fakestoreapi.com/products")
     const test2 = await test.json()
    setGetPro(test2)
  }
  
  supa = getPro;
  
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

const onFilterChange = (e) => {
  if (e.target.value === "All") {
    setProducts(getPro)
  }else {
    setProducts(products.filter(t => t.getPro === e.target.value))
    }
    }
  return (
    <div className='test2'>
      <Filter categories={supa2} onFilterChange={onFilterChange} />
  
        {getPro.map((t)=>
      <div className='test1'>
        <h6>{t.title}</h6>
        <img width={100} height={100} src={t.image} alt=''></img>
        <h6>{t.price}$</h6>
        <h6>{t.category}</h6>
        <h6>Rating {t.rating.rate} Count {t.rating.count}</h6>
        <div className='test3'>
        <button onClick={() => incerment(t.id)}>+</button>
                <h1>{t.amount ? t.amount : 0}</h1>
                <button onClick={() => decerment(t.id)}>-</button> 
        </div>
        
      </div>
      )}
      
    </div>
  )
}

export default Products