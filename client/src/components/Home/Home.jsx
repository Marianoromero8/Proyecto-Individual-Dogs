import React from 'react'
import Card from '../Card/Card'
import Filters from '../utils/Filters';
import Nav from '../Nav/Nav';
import style from './Home.module.css'
import { useSelector } from 'react-redux';

const Home = ({dogs, onSearch}) => {

  return (
    <div className={style.home}>
      <Nav onSearch={onSearch}/>
      <Filters/>
      <div className={style.divCards}>
      {dogs
      .map((dg) => (
      <Card dg={dg} key={dg.id} />
      ))}
      </div>
    </div>
  )
}

export default Home;
