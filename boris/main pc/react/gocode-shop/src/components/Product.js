import { arr } from './Data'
import './Product.css'
import React from 'react'

const Product = () => {
  return (
      <div>
          {arr.map((test) =>
              <div className="flex1">
                  <h1>{test.title}</h1>
                  <img width="100" height="100" src={test.image}></img>
                  <h6>{ test.price}$</h6>
          </div>)}
    </div>
  )
}

export default Product