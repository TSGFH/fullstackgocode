import React from 'react'
import {Products} from '../data/Products'

function Card() {
  return (
      <div>
          {Products.map((p) => 
              <div>
                  <h1>{p.title}</h1>
                  <img width={100} height="100" src={p.image}></img>
                  <h6>{p.price}$</h6>
                  <h6>{p.category}</h6>
                  <h6>Rating: {p.rating.rate} count: {p.rating.count}</h6>
              </div>)
          }
    </div>
  )
}

export default Card