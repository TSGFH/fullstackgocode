import React, { useEffect, useState } from 'react'
import './ProductsView.css'
import { useParams ,Link} from 'react-router-dom'
import axios from 'axios'
const ProductsView = () => {
  const [product, setProduct] = useState({})
  const params = useParams()

  const fetchSingleProduct = () => {
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${params.productId}`,
      
    }).then(res => {
      setProduct(res.data)
    }).catch((e) => console.log(e))
      .finally(() => console.log('finished'))
  }
  useEffect(() => {
    fetchSingleProduct()
  }, [])
  
  return (
    <div className='lefttoright'>
      <img height={500} width={500} src={product.image} alt=''/>
      <div className='uptodown'>
        <h1>{product.title}</h1>
        <h6>{product.price}</h6>
        <h6>{product.category}</h6>
        {/* <h6>Rate:{product.rating.rate} Count:{product.rating.count}</h6> */}
        <h6>{product.description}</h6>
        <Link to={`/`}>Home</Link>
      </div>
    </div>
  )
}

export default ProductsView