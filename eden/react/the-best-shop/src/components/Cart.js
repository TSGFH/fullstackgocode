import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Button,Card,CardContent,Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../Context/Context';
import { useContext } from 'react';
export default function Cart({ cartOpen, setCartOpen }) {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      <Drawer anchor={"left"}  open={cartOpen} variant={"temporary"} onClose={() => setCartOpen(false)}>
        
        {state.map((item, index) => {
          
          return (
            <Card sx={{ maxWidth: 300 }} key={index}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
                <Typography>
                  {item.quantity}
                </Typography>
                <Typography>
                  {item.quantity*item.price}
                </Typography>
              </CardContent>
              <Button onClick={() => dispatch({ type: "INCREASE", payload: item })}>+</Button>
              <Button onClick={() => {
                if (item.quantity > 1) {
                  dispatch({ type: "DECREASE", payload: item });
                } else {
                  dispatch({ type: "REMOVE", payload: item })
                }
              }} >-</Button>
              <Button onClick={() => dispatch({ type: "REMOVE", payload: item })} >remove</Button>
            </Card>
          )
        })}
        <Button onClick={() => setCartOpen(false)}>Close Cart</Button>
        <div className='btns'>
          {state.length > 0 && <span>Total:{total}</span>}
          <Button variant="contained"><Link to={`/cart`}>Checkout</Link></Button>
        </div>
        
      </Drawer>

    </>
  );
}