import './App.css';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/HomePage/Home';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Landing/>}/>

        <Route path='/home' element={<Home/>}/>

        {/* <Route path='/detail' element={<Detai/>}/>

        <Route path='/form' element={<Form/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
