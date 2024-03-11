import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({dg}) => {

  return (
  <Link to={`/detail/${dg.imageId}`} className={style.link}>

    <div className={style.card}>
      <img src={dg.image} alt={dg.name} className={style.image}/>
      <h1 className={style.h1}>{dg.name}</h1>
      <h2 className={style.h2}>Temperament: {dg.temperament}</h2>
      <h2 className={style.h2}>Weight: {dg.weight} kg</h2>
    </div>

  </Link>
  )
}

export default Card;