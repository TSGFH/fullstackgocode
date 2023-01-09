import './App.css';
import { useState } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Header />
      <button 
      onClick={() => setOpenModal(true)} 
      className='modalButton'>
        <img height={50} width={50} src='https://cdn-icons-png.flaticon.com/512/3916/3916598.png' alt=''/>
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
