import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './HomePage';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    </div>
  );
}

export default App;
