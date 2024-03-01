import React from 'react'

const Filters = () =>  {
  return (
    <div>
      <section>
        <select name="" id="">
          <option value="Temperaments">Temperaments</option>
        </select>
        <select>
          <option value="All">All</option>
          <option value="Api">Api</option>
          <option value="Data-Base">Data Base</option>
        </select>
        <select name="" id="">
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select >
          <option value="AscendenteNombre">Ascendente</option>
          <option value="DescendenteNombre">Descendente</option>
        </select>
      </section>
    </div>
  )
}

export default Filters;