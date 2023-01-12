import React from 'react'
import './Products.css'
const Products = () => {
  return (
    <div className='lefttoright'>
      <img height={100} width={100} src='SampleImg.png' alt=''/>
      <div className='uptodown'>
        <h1>title exmple</h1>
        <h6>price</h6>
        <h6>category</h6>
        <h6>rating</h6>
        <h6>description</h6>
      </div>
    </div>
  )
}

export default Products