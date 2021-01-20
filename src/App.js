import './App.css';
import {useState} from 'react';

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [bmi, setBmi] = useState(0)

  function calculate(e) {
    e.preventDefault();
    const bmie = weight / (height * height);
    setBmi(bmie)
  }

  return (
    <div className="container">
    <h3>Calculating body mass index</h3>
    <form onSubmit={calculate}>
      <div>
        <label>Height</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)}></input>
      </div>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
      <output>{bmi.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
  </div>
  );
}

export default App;
