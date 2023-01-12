import React from 'react'
import './Products.css'
import {supa} from '../components/Products'
const Products = () => {
  console.log(supa);
  return (
    <div className='lefttoright'>
      <img height={100} width={100} src='https://www.researchgate.net/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png' alt=''/>
      <div className='uptodown'>
        {supa.map((e) => 
          <div>
            <h1>{e.title}</h1>
        </div>)}
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