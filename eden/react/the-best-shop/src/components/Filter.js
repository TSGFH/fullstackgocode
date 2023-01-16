
import { Box,FormControl,InputLabel,Select,MenuItem } from '@mui/material'
import React from 'react'
import { supa } from './Products'
export let categories2 = ''
const Filter = ({categories, onFilterChange}) => {
  categories2 = categories = supa.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)
  return (
    <div>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="All"
          label="Filter:"
          onChange={onFilterChange}
        >
          <MenuItem value="All">All Products</MenuItem>
          {categories.map((i,index)=> <MenuItem value={i} key={index}>{i}</MenuItem>)}
         
        </Select>
      </FormControl>
    </Box>
    </div>
  )
}

export default Filter