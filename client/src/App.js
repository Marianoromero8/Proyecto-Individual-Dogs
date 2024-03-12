import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';
import Pagination from './components/Pagination/Pagination';
import { useDispatch } from 'react-redux';
import { getAllDogs, searchByName } from './redux/actions';


function App() {

  const dispatch = useDispatch()

  const onSearch = async (name) => {
    dispatch(searchByName(name))
  }

  useEffect(() => {
    dispatch(getAllDogs())
  }, [])

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Landing/>}/>

        <Route path='/home' element={<Pagination onSearch={onSearch} />}/>

        <Route path='/register' element={<Form />}/>

      </Routes>
      
    </div>
  );
}

export default App;
