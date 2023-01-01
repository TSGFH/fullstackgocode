import React from 'react'

const Filter = ({categories, onFilterChange}) => {
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