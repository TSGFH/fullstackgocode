import React from 'react'
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';
import { useState } from 'react';
const Home = () => {
  const [cartOpen, setCartOpen] = useState(false)

  const onClose = () => {
    setCartOpen(false);
  };
  return (
    <div>
      <Header />
      <Cart onClose={onClose} open={cartOpen} />
        <button onClick={() => setCartOpen(true)}><img width={50} height={50} src='https://cdn-icons-png.flaticon.com/512/263/263142.png'/></button>
      <Products />
      <Footer />
    </div>
  )
}

export default Home