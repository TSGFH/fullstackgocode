import React from 'react'
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';
import '@fontsource/roboto/300.css';
import { useState } from 'react';
import { Button } from '@mui/material';
const Home = () => {
  let [cartOpen, setCartOpen] = useState(false);

    

  return (
    <div>
      <Header />
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <Button variant="outlined" onClick={() => setCartOpen(true)}><img width={50} height={50} src='https://cdn-icons-png.flaticon.com/512/263/263142.png' alt='' /></Button>
      <Products />
      <Footer />
    </div>
  )
}

export default Home