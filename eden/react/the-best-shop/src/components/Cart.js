import * as React from 'react';
import Drawer from '@mui/material/Drawer';

export default function Cart(open, onClose) {

  return (
    <div>
      <Drawer anchor={"left"} open={false} variant={"temporary"}>
        somthing
        <button onClick={onClose}>Close Cart</button>
      </Drawer>
    </div>
  );
}