import React,{useContext} from 'react';
import './CartView.css';
import {Card,Typography,CardContent, Button} from '@mui/material'
import { Cartcontext } from '../Context/Context';
const CartView = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;
  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const tax = ((total / 100) * 17);
  const grandtotal = (tax + 250 + total);
  return (
    <div className={"columnDivider"}>
      <div>

      </div>
      {state.map((item, index) => {
          
          return (
            <Card sx={{ maxHeight: 500 }} key={index}>
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
      <div className='testit'>
        <span>SubTotal: {total}$</span>
        <span>Tax:17%: {tax}$</span>
        {total > 0 && <div className='testit'>
          <span>Shipping:250$</span>
        <span>Total: {grandtotal}$</span>
          </div>}
      </div>
      

    </div>
  )
}

export default CartView