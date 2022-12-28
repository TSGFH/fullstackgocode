import React from 'react'
import {Products} from '../data/Products'
import './Card.css'
import Filter from './Filter'

function Card() {
  const test=true;
  return (
      <div className="flex2">
        {test && <button onClick={console.log("hi")}>click me</button>}
         <Filter />
          {Products.map((p) => 
              <div>
                  <h1>{p.title}</h1>
                  <img width={100} height="100" src={p.image} alt=''></img>
                  <h6>{p.price}$</h6>
                  <h6>{p.category}</h6>
                  <h6>Rating: {p.rating.rate} count: {p.rating.count}</h6>
              </div>)
          }
    </div>
  )
}

export default Card