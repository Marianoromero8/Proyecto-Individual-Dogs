import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import style from './Nav.module.css'

const Nav = ({onSearch}) => {

  const navigate = useNavigate();

  return (
    <>
    <SearchBar onSearch={onSearch}/>
    <button onClick={() => {navigate('/form')}} className={style.create}>Add new breed</button>
    </>
  )
}

export default Nav;