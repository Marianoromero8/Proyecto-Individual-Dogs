import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import axios from 'axios';

const Cards = () => {

  const [dgs, setDgs] = useState([])

  useEffect(() => {
    try{
    axios('http://localhost:3001/api/dogs')
    .then(response => {
      console.log(response.data.slice(0,8))
      setDgs(response.data.slice(0, 8));
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
      {dgs.map((dg) => (
        <Card dog={dg} key={dg.id} />
      ))}
    </div>
  )
}

export default Cards;