import React, {useState} from 'react'
import {Products} from '../data/Products'
import './Card.css'
import Filter from './Filter'

function Card() {
  const categories = Products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index);
  const [products, setProducts] = useState(Products)
  
  const onFilterChange = (e) => {
    if (e.target.value === "All") {
      setProducts(Products)
    }else {
      setProducts(products.filter(p => p.category === e.target.value))
      }
      }
  return (
      <div className="flex2">
      <Filter categories={categories} onFilterChange={onFilterChange} />
          {products.map((p) => 
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