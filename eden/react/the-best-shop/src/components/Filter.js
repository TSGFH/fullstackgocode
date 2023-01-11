import React from 'react'
import { supa } from './Products'
export let supa2 = '';
const Filter = ({categories, onFilterChange}) => {
   supa2 = categories = supa.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index)
  return (
    <div>
        <label>Filter:</label>
    <select onChange={onFilterChange}>
      <option value="All">All Products</option>
      {supa2.map((i,index) => <option value={i} key={index}>{i}</option>)}
    </select>
    </div>
  )
}

export default Filter