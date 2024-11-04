import './App.css';
import { useState } from 'react';
function App() {
  
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
    
      <button onClick={handleClick}>Sayıyı arttır </button><br />
      <p> {value}</p>
    </div>
  );
 
}

export default App;
