import React from 'react'
import style from './Landing.module.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {

  const navigate = useNavigate();

  return (
    <div className={style.landing}>
      <h1>Welcome to my Dog's Project</h1>
      <h3>If you want to see different breeds click on button enter. Also you can add a new breed that you know</h3>
      <button onClick={() => {navigate('/home')}} className={style.landingButton}>Enter</button>
    </div>
  )
}

export default Landing;