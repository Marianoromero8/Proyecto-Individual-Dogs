import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './Form.module.css'
import validations from './validations';
import { useDispatch } from 'react-redux';
import { getAllTemperaments } from '../../redux/actions';

const Form = ({onLogin}) => {

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    breed:"",
    heightmin:"",
    heightmax:"",
    weightmin: "",
    weightmax: "",
    ages:"",
    temperament: []
  })
  
  const[temp, setTemp] = useState([])
  const[errors, setErrors] = useState({
    breed:"",
    heightmin:"",
    heightmax:"",
    weightmin: "",
    weightmax: "",
    ages:"",
    temperament: []
  })
  const[focus, setFocus] = useState("")
  
  useEffect(() => {
    dispatch(getAllTemperaments())
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

  useEffect(() => {
    setErrors(validations(form))
  }, [form.breed, form.heightmin, form.heightmax, form.weightmin, form.weightmax, form.ages, form.temperament])

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(form)
    alert("Breed create successfuly")
  }

  const handleAdd = (event) => {
    const {name, value} = event.target;

    if(!form.temperament.includes(value) && form.temperament.length < 5) {
      setForm({
        ...form,
        temperament: [...form.temperament, value]
      })
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }    
  }

  const handleRemove = (i) => {
    const freshTemp = [...form.temperament];

    freshTemp.splice(i, 1);

    setForm({
      ...form,
      temperament: [...freshTemp]
    })
  }

  const handleChange = (e) => {
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })
  }



  return (
    <div className={style.divForm}>
    
    <form className={style.form}>
    <h1>Create a new card</h1>

    <div>
      <label htmlFor="breed" className={style.label}>Breed Name:</label>
      <input type="text" name='breed' placeholder='Breed name...' value={form.breed} onChange={handleChange} className={style.input} required/>
      {errors.breed && <p>{errors.breed}</p>}

    </div>

    <div onChange={handleChange}>
      <label htmlFor="height" className={style.label}>Height min and max:</label>
      <input type="text" name='heightmin' placeholder='Min...' value={form.heightmin} onChange={handleChange} className={style.input} required/>
      {errors.heightmin && <p>{errors.heightmin}</p>}
      <input type="text" name="heightmax" placeholder='Max...' value={form.heightmax} onChange={handleChange} className={style.input} required/>
      {errors.heightmax && <p>{errors.heightmax}</p>}

    </div>

    <div onChange={handleChange}>
      <label htmlFor="weight" className={style.label}>Weight min & max:</label>
      <input type="text" name='weightmin' placeholder='Min...' value={form.weightmin} onChange={handleChange} className={style.input} required/>
      {errors.weightmin && <p>{errors.weightmin}</p>}
      <input type="text" name="weightmax" placeholder='Max...' value={form.weightmax} onChange={handleChange} className={style.input} required/>
      {errors.weightmax && <p>{errors.weightmax}</p>}

    </div>

    <div onChange={handleChange}>
      <label htmlFor="life_span" className={style.label}>Life Span:</label>
      <input type="number" name='agesmin' placeholder='Min...' value={form.agesmin} onChange={handleChange} className={style.input} required/>
      {errors.agesmin && <p>{errors.agesmin}</p>}
      <input type="number" name='agesmax' placeholder='Max...' value={form.agesmax} onChange={handleChange} className={style.input} required/>
      {errors.agesmax && <p>{errors.agesmax}</p>}


    </div>

    <div>
      <label htmlFor="temperaments" className={style.label}>Temperaments:</label>
      <select onChange={handleAdd} name="temperaments" className={style.select}>
        {
          temp.map( (tp) =>
            <option key={tp.id} value={tp.name} className={style.option}>{tp.name}</option> )
        }
      </select>
      {errors.temperament && <p>{errors.temperament}</p>}
      <small>Max 5 temperaments</small>
      {form.temperament.map((tempe, i) => (
        <div key={i} className={style.tag}>
          <span className={style.span}>{tempe}</span>
          <button className={style.buttonTag} type='button' onClick={() => handleRemove(i)}>X</button>
        </div>
      ))}
    </div>

    <button type='submit' onClick={handleSubmit} className={style.submit}>Create</button>
    </form>

    </div>

  )
}

export default Form;