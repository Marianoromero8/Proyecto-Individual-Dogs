import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './Card.module.css'
import Detail from '../Detail/Detail';

const Card = ({dg}) => {
  const[modal, setModal] = useState(false)

  const toggelModal = () => setModal(!modal)

  return (
  <div onClick={toggelModal} className={style.link}>

    <div className={style.card}>
      <img src={dg.image} alt={dg.name} className={style.image}/>
      <h1 className={style.h1}>{dg.name}</h1>
      <h2 className={style.h2}>Temperament: {dg.temperament}</h2>
      <h2 className={style.h2}>Weight: {dg.weight} kg</h2>
    </div>
    {modal && <div className={style.detail}>
      <Detail imageId={dg.imageId} toggelModal={toggelModal}/>
    </div>}
  </div>
  )
}

export default Card;