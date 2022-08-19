import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Valide from './component/Valide';
import Add from './component/Add';

function App() {
  return (
    <>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Add" element={<Add/>}></Route>
      <Route path="/Valide" element={<Valide/>}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
