import {Box,Slider} from '@mui/material'
import React,{useState} from 'react'

function valuetext(value) {
  return `${value}$`;
};

const FilterSlider = (props,onFilterChange) => {
  const newpro= props.cats;
  const money = newpro.map(p => p.price).filter((value, index, array) => array.indexOf(value) === index)

  const [value, setValue] = useState([1, 150]);

 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
        <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max="1000"
      />
    </Box>
    </>
  );
};

export default FilterSlider;