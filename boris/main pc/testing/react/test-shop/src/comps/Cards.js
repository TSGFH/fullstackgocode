import React from 'react'
import './super.css'
const Cards = (props) => {
    const prodcutData = props.cats;
    const loader = props.dogs
  return (
    <>
        {loader && (
        <div className='loading'>
        {" "}
        <img src={'https://media1.giphy.com/media/daak2Jqk5NZN2G4PKD/giphy.gif?cid=ecf05e47cz9jcpsisryapqqx05xs5vfi0xjruzkxi05u200z&rid=giphy.gif&ct=g'} alt=''/>
        </div>)}
        <div className='col'>
            {prodcutData.map((e)=>
            <div className='cards'>
            <h1>{e.title}</h1>
            <img src={e.image} alt='' height={100} width={100}/>
            <h6>{e.price}</h6>
            <h6>{e.category}</h6>
            <h6>{`Rating:${e.rating.rate} Count:${e.rating.count}`}</h6>
            </div>
        )}
        </div>
        
    </>
  )
}

export default Cards