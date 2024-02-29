import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const Nav = ({onSearch}) => {

  const navigate = useNavigate();

  return (
    <>
    <SearchBar onSearch={onSearch}/>
    <button onClick={() => {navigate('/form')}}>Add new breed</button>
    </>
  )
}

export default Nav;