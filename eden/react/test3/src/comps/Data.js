import React,{useEffect,useState} from 'react'

const Data = () => {
    const [data,setData]=useState([]);

    const getData= async()=>{
        const test1 = await fetch("https://fakestoreapi.com/products")
        const test2 = await test1.json()
        setData(test2)
    };

    useEffect(()=>{
        getData()
    },[]);

    console.log(data);
  return (
    <>
    {data.map((item)=>{
        return(
            <>
            <h1>{item.title}</h1>
            <img width={100} height={100} src={item.image} alt=''/>
            <h6>{item.category}</h6>
            <h6>{item.price}$</h6>
            <h6>Rating {item.rating.rate} Count:{item.rating.count}</h6>
            </>
        )
    })}
    </>
  )
}

export default Data