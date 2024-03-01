import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({dog}) => {

  return (
      <Link to={`/detail/${dog.imageId}`} className={style.link}>
    <div className={style.card}>
      <img src={dog.image} alt={dog.name} className={style.image}/>
      <h1 className={style.h1}>{dog.name}</h1>
      <h2 className={style.h2}>Temperament: {dog.temperament}</h2>
      <h2 className={style.h2}>Weight: {dog.weight} kg</h2>
    </div>
      </Link>
  )
}

export default Card;