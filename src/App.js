import { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Alpha from './components/Alpha'
import Bravo from './components/Bravo'

function App() {
  const [productName, setProductName] = useState('Yeti Koozie')

  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Alpha setProductName={setProductName} />
      <Bravo name={productName} />
    </div>
  );
}

export default App