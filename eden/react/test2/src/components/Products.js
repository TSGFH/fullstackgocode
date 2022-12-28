import React,{useState,useEffect} from 'react'
import {products} from '../data/Data';
import './Products.css'

const categories = products.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
const Products = () => {
  const [show, setShow]=useState();
  const onchangetest = (e) =>{
    const selectedid = e.target.value;
    const selectedcatstate = categories.filter((d)=> d.id == selectedid)[0];
    setShow(selectedcatstate)
  };
  useEffect(()=>{
    setShow(categories[1]);
  },[]);
  
  return (
    <div className="flex1">
      <label>Filter:</label>
      <select onChange={(e)=> {onchangetest(e)}} value={show?.id}>
        {categories.map((i,index) => <option value={i} key={index}>{i}</option>)}
      </select>
      
        {products.map((test) => 
        <button>
          <div>
            <h1>{test.title}</h1>
        <img width={100} height={100} src={test.image} alt=''></img>
        <h6>{test.price}$</h6>
        <h4>{test.category}</h4>
        
            </div>
          </button>)}
    </div>
  )
}

export default Products