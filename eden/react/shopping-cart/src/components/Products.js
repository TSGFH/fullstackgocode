import React,{useEffect,useState} from 'react'
import './Products.css'
import axios from 'axios'

const Products = () => {
    const [loading, setLoading]=useState(false);
    const [data,setData]=useState([]);

    useEffect(()=> {
        setLoading(true);
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products",
        })
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
        .catch((e)=>console.log(e))
        .finally(()=>setLoading(false));
    },[])
    const [supercount,setSupercount]=useState(0);
    const incerment = () =>{
        setSupercount(supercount +1)
    }
    const decerment = () =>{
        setSupercount(supercount -1)
    }
  return (
    <div className='flex3'>
        {loading && <div>
            {" "}
            <h1>Loading...</h1>
            </div>
            }

            {data.map((somthing) => 
            <div>
                <h1>{somthing.title}</h1>
                <img width={100} height={100} src={somthing.image} alt=''></img>
                <h6>{somthing.price}$</h6>
                <h6>Rating: {somthing.rating.rate} Count:{somthing.rating.count}</h6>
                <h6>{somthing.category}</h6>
                <div className='flex4'>
                <button onClick={incerment}>+</button>
                <h1>{supercount}</h1>
                <button onClick={decerment}>-</button> 
                </div>
                
            </div>)}
    </div>
  )
}

export default Products