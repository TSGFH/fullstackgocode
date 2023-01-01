import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Data = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products",
        })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    },[])

  return (
      <div>
          {loading && (
              <div>
              {" "}
              <h1>Loading...</h1>
              </div>)}
          
          {data.map((p) => (
              <div key={p.id}>
                  <h1>{p.title}</h1>
                  <img height={100} width={100} src={p.image} alt=''></img>
                  <h6>Rate:{p.rating.rate},Count:{p.rating.count}</h6>
                  <h6>{p.price}$</h6>
                  <h6>{p.category}</h6>
                  </div>
          ))}
    </div>
  )
}

export default Data