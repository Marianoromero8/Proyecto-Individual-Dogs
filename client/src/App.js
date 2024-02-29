import './App.css';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import Landing from './components/Landing/Landing';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'

function App() {

  const [dogs, setDogs] = useState([]);

  const onSearch = async (name) => {
  if(dogs.some(d => d.name === name)) window.alert ("Breed exist")

  try{
    const {data} = await axios(`http://localhost:3001/api/dogs/name/name?name=${name}`)
    if(data.name){
      setDogs((oldDogs) => [...oldDogs, data])
    } else {
      alert('¡No dog with that name breed!')
    }
  }
  catch(error){
    alert('No function')
  }
  }

  const onClose = (id) => {
    setDogs((prevState) => prevState.filter((dog) => {
      return parseInt(dog.id) !== parseInt(id)
    }))
  }

  const [access, setAccess] = useState(false)

  const onLogin = async (form) => {
    await axios(`http://localhost:3001/api/dogs/form?nombre=${form.name}&altura=${form.tamañomin}-${form.tamañomax}&peso=${form.pesomin}-${form.pesomax}&años=${form.años}&temperamento=${form.temperament}`)
    .then(({data}) => {
      if(data.access){
        setAccess(true);
        navigate('/home')
      } else {
        alert('Error')
      }
    })
  }
 
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="App">

    {location.pathname === '/home' && <Nav onSearch={onSearch}/>}

      <Routes>

        <Route path='/' element={<Landing/>}/>

        <Route path='/home' element={<Home dog={dogs} onClose={onClose}/>}/>

        <Route path='/detail/:id' element={<Detail/>}/>

        <Route path='/form' element={<Form onLogin={onLogin}/>}/>

      </Routes>
    </div>
  );
}

export default App;
