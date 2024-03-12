import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import style from './Nav.module.css'

const Nav = ({onSearch}) => {
  const navigate = useNavigate();

  return (
    <div className={style.div}>
    <span className={style.span}>The Dogs API</span>
    <SearchBar onSearch={onSearch}/>
    <button onClick={() => {navigate('/register')}} className={style.create}>Add new breed</button>
    </div>
  )
}

export default Nav;