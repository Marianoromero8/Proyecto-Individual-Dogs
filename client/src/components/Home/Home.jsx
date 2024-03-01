import React from 'react'
import Cards from '../Cards/Cards'
import Filters from '../utils/Filters';

const Home = ({props}) => {

  return (
    <div>
      <Filters/>
      <Cards props={props}/>
    </div>
  )
}

export default Home;
