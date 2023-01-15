import React,{useState,useEffect} from 'react'
import Filter,{categories2} from './Filter';
import './Products.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button, InputLabel, MenuItem, Select ,Box, FormControl} from '@mui/material';
export let supa = [];

const Products = () => {
   const [getPro, setGetPro]= useState([]);
  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(false)
  
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
      
    }).then(res => {
      setGetPro(res.data)
      setProducts(res.data)
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
    setProducts(getPro.filter(t => t.category === e.target.value))
    }
  }
  return (
    <div className='test2'>
      
      <Filter categories={categories2} onFilterChange={onFilterChange} />
      <div className='supaclassa'>
        {loading && (
        <div className='supaclassa'>
        {" "}
        <img src={'https://media1.giphy.com/media/daak2Jqk5NZN2G4PKD/giphy.gif?cid=ecf05e47cz9jcpsisryapqqx05xs5vfi0xjruzkxi05u200z&rid=giphy.gif&ct=g'} alt=''/>
        </div>)}
      </div>
      
        {products.map((t)=>
          <div className='test1'>
        <h6>{t.title}</h6>
        <img width={100} height={100} src={t.image} alt=''></img>
        <h6>{t.price}$</h6>
        <h6>{t.category}</h6>
              <h6>Rating {t.rating.rate} Count {t.rating.count}</h6>
              <Button variant="outlined"><Link to={`/products/${t.id}`}>View</Link></Button>
        <div className='test3'>
        <Button  onClick={() => incerment(t.id)}>+</Button>
                <h1>{t.amount ? t.amount : 0}</h1>
                <Button  onClick={() => decerment(t.id)}>-</Button> 
        </div>
      </div>
      )}
    </div>
  )
}

export default Products