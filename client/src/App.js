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
      setDogs((oldDogs) => [...oldDogs, data[0]])
      console.log(dogs)
    } else {
      alert('¡No dog with that name breed!')
    }
  }
  catch(error){
    alert('No found')
  }
}

useEffect(() => {
 console.log(dogs)
}, [dogs])

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

  // const [call, setCall] = useState([])
  
  //   useEffect(() => {
  //     try{
  //     axios('http://localhost:3001/api/dogs')
  //     .then(response => {
  //       setCall(response.data);
  //     })
  //     .catch(error => {
  //       return ({error})
  //     })
  //     }
  //     catch(error){
  //       return ({error})
  //     }
  //   }, [])
  

  // const[pagina, setPagina] = useState(1);
  // const[porPag, setPorPag] = useState(8);
 
  // const max = Math.ceil(call.length / porPag);

  return (
    <div className="App">

    {/* {location.pathname === '/home' && <Nav onSearch={onSearch}/>} */}

      <Routes>

        <Route path='/' element={<Landing/>}/>

        {/* <Route path='/home' element={<Home dog={dogs} onSearch={onSearch} onClose={onClose}/>}/> */}

        <Route path='/home' element={<Pagination dogs={dogs} onSearch={onSearch} onClose={onClose}/>}/>

        <Route path='/detail/:imageId' element={<Detail/>}/>

        <Route path='/form' element={<Form onLogin={onLogin}/>}/>

      </Routes>
    </div>
  );
}

export default App;
