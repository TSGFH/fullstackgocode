import './App.css';
import Data from './comps/Data';
import Header from './comps/Header'
import Footer from './comps/Footer'
import './comps/super.css'
function App() {
  return (
    <div className="App test1">
      <Header/>
      <div>
        <Data/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
