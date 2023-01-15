import React from 'react'
import ProductsView from '../views/ProductsView';
import Home from './Home';
import About from './About';
import Err404 from './Err404';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from './CartView';
const Main = () => {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='products/:productId' element={<ProductsView />} />
          <Route path='*' element={<Err404 />} />
          <Route path='/cart' element={<CartView />} />
              </Routes>
          </BrowserRouter>
    </div>
  )
}

export default Main