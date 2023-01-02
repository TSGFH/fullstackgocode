import React,{useState,useEffect} from 'react';
import Products from './Products';
const Cart = ({ open, onClose }) => {
  if (!open) return null;

  const [add,setAdd]='';

  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            <button>X</button>
          </p>
          <div className='content'>
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;