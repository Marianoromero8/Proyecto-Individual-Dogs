import React, { useEffect } from 'react'
import style from './Filters.module.css'
import { callDogsApi, callDogsDB, getAllTemperaments, orderAZ, orderWeightAsc, orderWeightDesc, orderZA, tempFilter } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const Filters = () =>  {

const dispatch = useDispatch()
const allTemperaments = useSelector(state => state.temperaments)
const allDogs = useSelector(state => state.dogs)

useEffect(() => {
  dispatch(getAllTemperaments())
},[])


const handleChange = (e) => {
  dispatch(tempFilter(e.target.value))
}

const handleOrder = (e) => {
  if(e.target.value === "A"){
    dispatch(orderAZ(allDogs))
  } else{
    dispatch(orderZA(allDogs))
  }
}

const handleWeight = (e) => {
  if(e.target.value === "PA"){
    dispatch(orderWeightAsc(allDogs))
  } else{
    dispatch(orderWeightDesc(allDogs))
  }
}

const handleOrigin = (e) => {
  if(e.target.value === "API"){
    dispatch(callDogsApi(allDogs))
  } else{
    dispatch(callDogsDB(allDogs))
  }
}

  return (
    <div>
      <section>
        <select name="" id="" className={style.select} onChange={handleChange}>
          <option value="All" className={style.option}>All</option>
          {allTemperaments.map((temp, i) => (
             <option value={temp.name} className={style.option} key={i}>{temp.name}</option> 
          ))}
        </select>
        <select className={style.select} onChange={handleOrigin}>
          <option value="All" className={style.option}>All</option>
          <option value="Api" className={style.option}>Api</option>
          <option value="DB" className={style.option}>Data Base</option>
        </select>
        <select name="" id="" className={style.select} onChange={handleOrder}>
          <option value="A" className={style.option}>A-Z</option>
          <option value="D" className={style.option}>Z-A</option>
        </select>
        <select className={style.select} onChange={handleWeight}>
          <option value="PA" className={style.option}>Peso Ascendente</option>
          <option value="PD" className={style.option}>Peso Descendente</option>
        </select>
      </section>
    </div>
  )
}

export default Filters;