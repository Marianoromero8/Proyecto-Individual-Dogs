import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {

  const [state, setState] = useState("");

  const handleChange = (event) => {
    const {value} = event.target

    setState(value)
  }

  const handleClick = () => {
    onSearch(state)

    setState("")
  }


  return (
    <div>
      <input value={state}  placeholder='Breed...' onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default SearchBar;