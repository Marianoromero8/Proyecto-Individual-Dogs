import React from 'react'
import Card from '../Card/Card'
import Filters from '../utils/Filters';
import Nav from '../Nav/Nav';

const Home = ({onSearch, dogs, onClose, pagina, porPag}) => {

  return (
    <div>
      <Nav onSearch={onSearch}/>
      <Filters/>
      {dogs
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
