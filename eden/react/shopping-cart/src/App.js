import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        Cart
      </button>
      <Cart 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
