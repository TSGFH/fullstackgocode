
import { Box,FormControl,InputLabel,Select,MenuItem } from '@mui/material'
import React, {useState} from 'react'
import { supa } from './Products'
export let categories2 = ''
const Filter = ({categories, onFilterChange, cat, setCat}) => {
  categories2 = categories = supa.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)
  categories.unshift("All Products")

  const handleSelect = (e) => {
    setCat(e.target.value)
  }
  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="Filter:"
          onChange={handleSelect}>
            
          {categories.map((i,index)=> <MenuItem value={i} key={index}>{i}</MenuItem>)}
         
        </Select>
      </FormControl>
    </Box>
    </>
  )
}

export default Filter