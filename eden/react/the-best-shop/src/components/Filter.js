import React from 'react'
import { supa } from './Products'
export let categories2 = ''
const Filter = ({categories, onFilterChange}) => {
  categories2 = categories = supa.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)
  return (
    <div>
        <label>Filter:</label>
    <select onChange={onFilterChange}>
      <option value="All">All Products</option>
      {categories.map((i,index) => <option value={i} key={index}>{i}</option>)}
    </select>
    </div>
  )
}

export default Filter