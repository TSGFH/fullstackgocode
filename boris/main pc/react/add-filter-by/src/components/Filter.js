import React from 'react'
import { Products } from '../data/Products';

const Filter = () => {
  const categories = Products.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index);
  console.log(categories);
  return (
    <div>
      <label>Filter:</label>
      <select onChange={(e) => e.categories.value}>
        {Products.map((p) => <option>{p.categories}</option>)}
      </select>
    </div>
  )
}

export default Filter