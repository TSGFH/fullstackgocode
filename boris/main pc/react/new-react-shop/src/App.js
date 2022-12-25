import './App.css';
import {arr, arr2} from './data/data'

function whyounowork(tester){
  return [tester.title]
}

const test2 = arr.map(whyounowork)
function App() {

  return (
    <div className="App">
      <h1>{test2}</h1>
    </div>
  );
}

export default App;