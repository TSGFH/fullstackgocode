import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Button } from '@mui/material';
export default function Cart(open, onClose) {
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <div>
      <Drawer anchor={"left"} open={cartOpen} variant={"temporary"} onClose={() => (setCartOpen(false))}>
        
        {/* {code to add and remove itmes gose here} */}
        <Button onClick={()=>setCartOpen(false)}>Close Cart</Button>
      </Drawer>
    </div>
  );
}