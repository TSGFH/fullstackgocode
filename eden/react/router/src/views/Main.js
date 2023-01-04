import * as React from 'react'
import Err404 from './Err404'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Products from './Products';
import Data from '../data/Data';
const Main = () => {
    let p =''
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path={"products/"+p.id} element={<Products />}/>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="*" element={<Err404 />}/>
            </Routes>   
        </BrowserRouter>
        
    </div>
  )
}

export default Main