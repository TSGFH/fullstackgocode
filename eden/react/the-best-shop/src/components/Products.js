import React,{useState,useEffect, useContext} from 'react'
import Filter,{categories2} from './Filter';
import './Products.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button,Card,CardMedia,CardContent,Typography,CardActions,Rating} from '@mui/material';
import FilterSlider from './FilterSlider';
import '../views/About.css'
import Cart from './Cart';
import { Cartcontext } from '../Context/Context';
export let supa = [];

const Products = () => {
  let [cartOpen, setCartOpen] = useState(false);
   const [getPro, setGetPro]= useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading]= useState(false);
  const [moneyp,setMoneyp]= useState([]);
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
//   const incerment = (id) =>{
//     const cloneData = [...getPro]
//     const chosenProductIndex = cloneData.findIndex(p => p.id === id)
//     cloneData[chosenProductIndex].amount > 0 ? cloneData[chosenProductIndex].amount += 1 : cloneData[chosenProductIndex].amount = 1
//     setGetPro(cloneData)
//     // {code to add items to the cart}

// }
// const decerment = (id) =>{
//   const cloneData = [...getPro]
//   const chosenProductIndex = cloneData.findIndex(p => p.id === id)
//   cloneData[chosenProductIndex].amount > 0 ? cloneData[chosenProductIndex].amount -= 1 : cloneData[chosenProductIndex].amount = 0
//   setGetPro(cloneData)
//   // {code to remove items from the cart}

// }

  const onFilterChange = (e) => {
  console.log(e.target.value)
  if (e.target.value === "All Products") {
    console.log('got here')
    setProducts(getPro)
  }else {
    setProducts(getPro.filter(t => t.category === e.target.value))
    if(e.target.value !== "All Products"){
      setMoneyp(products.filter(t=>t.price === e.target.value))
    }
    }
  }
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <>
    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div className='filters fu'>
      <Button variant="outlined" onClick={() => setCartOpen(true)}><img width={50} height={50} src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='' className='spacer'/></Button>
      <Filter categories={categories2} onFilterChange={onFilterChange} />
      <FilterSlider cats={products} onFilterChange={onFilterChange}/>
      </div>
      <>
        {loading && (
        <>
        {" "}
        <img src={'https://media1.giphy.com/media/daak2Jqk5NZN2G4PKD/giphy.gif?cid=ecf05e47cz9jcpsisryapqqx05xs5vfi0xjruzkxi05u200z&rid=giphy.gif&ct=g'} alt=''/>
        </>)}
      </>
      <div className='flexing'>
        {products.map((item, index) => {
          item.quantity = 1;
          return (
            <Card sx={{ maxWidth: 400 }} key={index}>
            <CardMedia
              sx={{ height: 300 }}
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}$
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Rating name="read-only" defaultValue={item.rating.rate} readOnly ></Rating>
                Count:{item.rating.count}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined"><Link to={`/products/${item.id}`}>View</Link></Button>
              <Button onClick={() => dispatch({ type: "ADD", payload: item })}>Add to cart</Button>
            </CardActions>
          </Card>
          )
          
        })}
      </div>
      
    </>
  )
}

export default Products