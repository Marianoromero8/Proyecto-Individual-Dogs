import './App.css';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail'
import Pagination from './components/Pagination/Pagination';
import { useDispatch } from 'react-redux';
import { getAllDogs, searchByName } from './redux/actions';


function App() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSearch = async (name) => {
    dispatch(searchByName(name))
  }

useEffect(() => {
  dispatch(getAllDogs())
}, [])

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

        <Route path='/home' element={<Pagination onSearch={onSearch} />}/>

        <Route path='/detail/:imageId' element={<Detail/>}/>

        <Route path='/form' element={<Form onLogin={onLogin}/>}/>

      </Routes>
    </div>
  );
}

export default App;
