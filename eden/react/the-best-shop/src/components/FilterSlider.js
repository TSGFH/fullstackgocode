import {Box,Slider} from '@mui/material'
import React,{useState} from 'react'

function valuetext(value) {
  return `${value}$`;
};

const FilterSlider = ({rangePrice, setRangePrice}) => {
 
  const handleChange = (event, newValue) => {
    setRangePrice(newValue);
  };

  return (
    <>
        <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'price range'}
        value={rangePrice}
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