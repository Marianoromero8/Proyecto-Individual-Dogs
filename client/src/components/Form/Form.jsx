import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Form.module.css'

const Form = ({onLogin}) => {

  const [form, setForm] = useState({
    name:"",
    tamañomin:"",
    tamañomax:"",
    pesomin: "",
    pesomax: "",
    años:"",
    temperamento: []
  })
  
  const[temp, setTemp] = useState([])
  
  useEffect(() => {
    try{
      axios('http://localhost:3001/api/temperaments')
      .then(response => {
          setTemp(response.data);
       })
      .catch(error => {
          return ({error})
       })
      }
    catch(error){
      return ({error})
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(form)
    alert("Breed create successfuly")
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    if(!form.temperamento.includes(value) && form.temperamento.length < 5) {
      setForm({
        ...form,
        temperamento: [...form.temperamento, value]
      })
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }    
  }

  const handleRemove = (i) => {
    const freshTemp = [...form.temperamento];

    freshTemp.splice(i, 1);

    setForm({
      ...form,
      temperamento: [...freshTemp]
    })
  }


  return (
    <div className={style.form}>
    
    <form>
    <h1>Create a new card</h1>

    <div>
      <label htmlFor="nombre">Nombre Raza:</label>
      <input type="text" name='name' value={form.name} onChange={handleChange} required/>
    </div>

    <div>
      <label htmlFor="height">Altura min & max:</label>
      <input type="text" name='tamañomin' placeholder='Minimo...' value={form.tamañomin} onChange={handleChange} required/>
      <input type="text" name="tamañomax" placeholder='Maximo...' value={form.tamañomax} onChange={handleChange} required/>
    </div>

    <div>
      <label htmlFor="weight">Peso min & max:</label>
      <input type="text" name='pesomin' placeholder='Minimo...' value={form.pesomin} onChange={handleChange} required/>
      <input type="text" name="pesomax" placeholder='Maximo...' value={form.pesomax} onChange={handleChange} required/>
    </div>

    <div>
      <label htmlFor="life_span">Años de vida:</label>
      <input type="number" name='años' placeholder='Años...' value={form.años} onChange={handleChange} required/>
    </div>

    <div>
      <label htmlFor="temperament">Temperamentos:</label>
      <select onChange={handleChange} name="temperament">
        {
          temp.map( (tp) =>
            <option key={tp.id} value={tp.name}>{tp.name}</option> )
        }
      </select>
      <small>Max 5 temperaments</small>
      {form.temperamento.map((tempe, i) => (
        <div key={i} className={style.tag}>
          <span>{tempe}</span>
          <button className={style.buttonTag} type='button' onClick={() => handleRemove(i)}>X</button>
        </div>
      ))}
    </div>

    <button type='submit' onClick={handleSubmit}>Create</button>
    </form>

    </div>

  )
}

export default Form;