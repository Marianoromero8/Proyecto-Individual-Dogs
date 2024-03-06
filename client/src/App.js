import './App.css';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail'
import Pagination from './components/Pagination/Pagination';


function App() {

  const navigate = useNavigate()

  const [dogs, setDogs] = useState([]);

  const onSearch = async (name) => {
  try{
    const {data} = await axios(`http://localhost:3001/api/dogs/name/name?name=${name}`)
    if(data.length > 0){
      setDogs(data)
    } else {
      alert('¡Breed does not exist!')
    }
  }
  catch(error){
    alert('No found')
  }
  }

useEffect(() => {
  try{
  axios('http://localhost:3001/api/dogs')
  .then(response => {
    setDogs(response.data);
  })
  .catch(error => {
    return ({error})
  })
  }
  catch(error){
    return ({error})
  }
}, [])

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


  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Landing/>}/>

        <Route path='/home' element={<Pagination dogs={dogs} onSearch={onSearch} onClose={onClose}/>}/>

        <Route path='/detail/:imageId' element={<Detail/>}/>

        <Route path='/form' element={<Form onLogin={onLogin}/>}/>

      </Routes>
    </div>
  );
}

export default App;
