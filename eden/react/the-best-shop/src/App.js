import './App.css';
import Products from './views/Products';
import Home from './views/Home';
import About from './views/About';
import Err404 from './views/Err404';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='products' element={<Products/>}/>
        <Route path='*' element={<Err404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
