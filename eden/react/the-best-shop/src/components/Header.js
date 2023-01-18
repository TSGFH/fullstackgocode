import React from 'react'
import './Header.css'
import { Button } from '@mui/material'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex1 sticky'>
      <h1>
          Eden's shop
        </h1>
        <Button color={'error'} variant="contained"><Link to={`/about/`}>About</Link></Button>
            <Button color={'error'} variant="contained"><Link to={`/Cart`}>Cart</Link></Button>
            <Button color={'error'} variant="contained"><Link to={`/`}>Home</Link></Button>
    </div>
  )
}

export default Header