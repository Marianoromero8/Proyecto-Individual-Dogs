import React from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'

const Card = ({dog}) => {

  return (
    <div className={style.card}>
      <img src={dog.image} alt={dog.name} className={style.image}/>
      <h1 className={style.h1}>{dog.name}</h1>
      <h2 className={style.h2}>Temperamento: {dog.temperament}</h2>
      <h2 className={style.h2}>Peso: {dog.weight} kg</h2>
      <Link to={`/detail/${dog.id}`}><button>Detail</button></Link>
    </div>
  )
}

export default Card;