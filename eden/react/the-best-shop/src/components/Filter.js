
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

const Filter = ({ cat, setCat, getPro}) => {
  const categories = getPro.map(p => p.category).filter((value, index, array) => array.indexOf(value) === index)
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