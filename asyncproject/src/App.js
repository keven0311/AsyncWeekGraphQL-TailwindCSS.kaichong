import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Tailwindcss from './components/Tailwindcss';
import Graphql from './components/Graphql';
import CharacterList from './components/CharacterList';
import Character from './components/Character';
import Search from './components/Search';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/tailwindcss' element={<Tailwindcss/>}/>
        <Route path='/graphql' element={<Graphql/>}/>
        <Route path='/example' element={<CharacterList/>}/>
        <Route path='/example/:id' element={<Character/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
