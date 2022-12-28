import React from 'react'
import { Products } from '../data/Products';

const Filter = () => {
  const categories = Products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index);
  return (
    <div>
      <label>Filter:</label>
      <select onChange={(e) => e.target.value}>
      {categories.map((i,index) => <option value={i} key={index}>{i}</option>)}
      </select>
    </div>
  )
}

export default Filter