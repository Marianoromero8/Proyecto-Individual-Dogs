import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {

  const [state, setState] = useState("");

  const handleChange = (event) => {
    const {value} = event.target

    setState(value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    onSearch(state) 

    setState("")
  }


  return (
    <form onSubmit={handleClick}>
      <input value={state}  placeholder='Breed...' onChange={handleChange}/>
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBar;