import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import './super.css'
const Data = () => {
    const [data, setData]= useState([]);
    const [loading, setLoading]= useState(false)
    useEffect(() => {
      setLoading(true);
      axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
        
      }).then(res => {
        setData(res.data)
      }).catch((e) => console.log(e))
        .finally(() => setLoading(false))
    }, [])
  return (
    <div>
        <Cards cats={data} dogs={loading}/>
    </div>
  )
}

export default Data