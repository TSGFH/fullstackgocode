import React, { useState, useEffect, useContext } from 'react';
import Filter from './Filter';
import './Products.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button,Card,CardMedia,CardContent,Typography,CardActions,Rating} from '@mui/material';
import FilterSlider from './FilterSlider';
import '../views/About.css';
import Cart from './Cart';
import { Cartcontext } from '../Context/Context';

const Products = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [getPro, setGetPro]= useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading]= useState(false);
  const [rangePrice,setRangePrice]= useState([1,1000]);
  const [cat, setCat] = useState("All Products");

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
  }, []);

  useEffect(() => { onFilterChange() },[cat, rangePrice]);

  const onFilterChange = () => {
  if (cat === "All Products") {
    setProducts(getPro.filter(t=> t.price >= rangePrice[0] && t.price <= rangePrice[1]))
  }else {
    const filteredProducts = getPro.filter(t => t.category === cat && t.price >= rangePrice[0] && t.price <= rangePrice[1]);
    setProducts(filteredProducts);
    }
  }
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  return (
    <>
    <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <div className='filters fu'>
        <Button variant="outlined" onClick={() => setCartOpen(true)}><img width={50} height={50} src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='' className='spacer' /></Button>
        <Filter onFilterChange={onFilterChange} cat={cat} setCat={setCat} getPro={getPro} />
        <FilterSlider onFilterChange={onFilterChange} rangePrice={rangePrice} setRangePrice={setRangePrice} />
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