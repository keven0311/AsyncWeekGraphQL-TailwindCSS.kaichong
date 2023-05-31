import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom'
import Tailwindcss from './components/Tailwindcss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/tailwindcss' element={<Tailwindcss/>}/>
      </Routes>
    </div>
  );
}

export default App;
