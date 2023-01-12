import React,{useState,useEffect} from 'react'
import Filter,{categories2} from './Filter';
import './Products.css'
import axios from 'axios'
export let supa = [];
const Products = () => {
   const [getPro, setGetPro]= useState([]);
  const [products, setProducts] = useState(getPro)
  const [loading, setLoading]= useState(false)
  
  
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      
    }).then(res => {
      setGetPro(res.data)
    }).catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])
  supa = getPro
  const incerment = (id) =>{
    const cloneData = [...getPro]
    const chosenProductIndex = cloneData.findIndex(p => p.id === id)
    cloneData[chosenProductIndex].amount > 0 ? cloneData[chosenProductIndex].amount += 1 : cloneData[chosenProductIndex].amount = 1
    setGetPro(cloneData)
    // {code to add items to the cart}
}
const decerment = (id) =>{
  const cloneData = [...getPro]
  const chosenProductIndex = cloneData.findIndex(p => p.id === id)
  cloneData[chosenProductIndex].amount > 0 ? cloneData[chosenProductIndex].amount -= 1 : cloneData[chosenProductIndex].amount = 0
  setGetPro(cloneData)
  // {code to remove items from the cart}
}

  const onFilterChange = (e) => {
  
  if (e.target.value === "All") {
    setProducts(getPro)
  }else {
    setProducts(products.filter(t => t.category === e.target.value))
    }
  }
 
  return (
    <div className='test2'>
      {loading && (
        <div>
        {" "}
        <h1>Loading...</h1>
      </div>)}
      <Filter categories={categories2} onFilterChange={onFilterChange} />
      
        {products.map((t)=>
          <div className='test1'>
            <button className='stupidbutton'>
        <h6>{t.title}</h6>
        <img width={100} height={100} src={t.image} alt=''></img>
        <h6>{t.price}$</h6>
        <h6>{t.category}</h6>
        <h6>Rating {t.rating.rate} Count {t.rating.count}</h6>
        </button>
        
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