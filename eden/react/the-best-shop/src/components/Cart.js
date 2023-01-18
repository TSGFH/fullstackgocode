import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
export default function Cart({cartOpen, setCartOpen}) {
  
  
  return (
    <>
      <Drawer anchor={"left"}  open={cartOpen} variant={"temporary"} onClose={() => setCartOpen(false)}>
        
        {/* {code to add and remove itmes gose here} */}

        <Button onClick={()=>setCartOpen(false)}>Close Cart</Button>
        <div className='btns'>
          <span>Total:{}</span>
          <Button variant="contained"><Link to={`/cart`}>Checkout</Link></Button>
        </div>
        
      </Drawer>
    </>
  );
}