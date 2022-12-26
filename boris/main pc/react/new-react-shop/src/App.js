import './App.css';
import {arr} from './data/data'

const Headers = () => {
  return (
    <div className="flex1">
      {arr.map((test) =>
        <div className="flex2">
          <h1>{test.title}</h1>
          <img width="100" height="100" src={test.image}></img>
          <h6> {test.description} </h6>
          <h6> category:{test.category} </h6>
          <h6> {test.price}$ </h6>
          <h6> rating:{test.rating.rate} count:{test.rating.count}</h6>
        </div>
        )}
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Headers />
    </div>
  );
}

export default App;