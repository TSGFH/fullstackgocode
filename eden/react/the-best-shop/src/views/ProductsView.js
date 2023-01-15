import React, { useEffect, useState } from 'react'
import './ProductsView.css'
import { useParams ,Link} from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material'
const ProductsView = () => {
  const [product, setProduct] = useState({})
  const params = useParams()
  const [loading, setLoading] = useState(false)
  
  const fetchSingleProduct = () => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${params.productId}`,
      
    }).then(res => {
      setProduct(res.data)
    }).catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    setLoading(true);
    fetchSingleProduct()
  }, [])
  return (
    <div>
      {loading && (
        <div>
        {" "}
        <img src='https://media1.giphy.com/media/daak2Jqk5NZN2G4PKD/giphy.gif?cid=ecf05e47cz9jcpsisryapqqx05xs5vfi0xjruzkxi05u200z&rid=giphy.gif&ct=g' alt=''/>
      </div>)}
      <div className='lefttoright'>
      <img height={250} width={250} src={product.image} alt=''/>
      <div className='uptodown'>
        <h1>{product.title}</h1>
        <h6>{product.price}$</h6>
        <h6>{product.category}</h6>
        {/* <h6>Rate:{product.rating.rate} Count:{product.rating.count}</h6> */}
        <h6>{product.description}</h6>
        <Button variant="contained"><Link to={`/`}>Home</Link></Button>
      </div>
    </div>
    </div>
    
  )
}

export default ProductsView