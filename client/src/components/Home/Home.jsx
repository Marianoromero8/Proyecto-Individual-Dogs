import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Filters from '../utils/Filters';
import Nav from '../Nav/Nav';
import axios from 'axios';

const Home = ({onSearch, onClose, dogs, pagina, porPag}) => {

    const [dgs, setDgs] = useState([])

  useEffect(() => {
    try{
    axios('http://localhost:3001/api/dogs')
    .then(response => {
      setDgs(response.data);
    })
    .catch(error => {
      return ({error})
    })
    }
    catch(error){
      return ({error})
    }
  }, [])


  return (
    <div>
      <Nav onSearch={onSearch}/>
      <Filters/>
      {dgs
      .slice(
        (pagina - 1) * porPag,
        (pagina - 1) * porPag + porPag
      )
      .map((dg) => (
        <Card dg={dg} key={dg.id} />
      ))}
    </div>
  )
}

export default Home;
