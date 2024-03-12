import React, { useEffect, useState } from 'react';
import style from './Form.module.css'
import validations from './validations';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemperaments, postDog } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const allTemperaments = useSelector(state => state.temperaments)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTemperaments(allTemperaments))
  },[])

  const[errors, setErrors] = useState({
    name:"",
    heightmin:"",
    heightmax:"",
    weightmin: "",
    weightmax: "",
    agesmin:"",
    agesmax:"",
    temperaments: []
  })
  const [form, setForm] = useState({
    name:"",
    heightmin:"",
    heightmax:"",
    weightmin: "",
    weightmax: "",
    agesmin:"",
    agesmax:"",
    temperaments: []
  })
  
  useEffect(() => {
    setErrors(validations(form))
  }, [form.name, form.heightmin, form.heightmax, form.weightmin, form.weightmax, form.agesmin, form.agesmax, form.temperaments])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name && form.weightmin && form.weightmax && form.heightmin && form.heightmax && form.agesmin && form.agesmax && form.temperaments.length
    ) {
      dispatch(postDog(form));
      setForm({
        name: "",
        heightmin: "",
        heightmax: "",
        weightmin: "",
        weightmax: "",
        agemin: "",
        agemax: "",
        image: "",
        temperaments: [],
      });
      alert("Breed created");
    } else {
      alert("All Necessary fields must be filled");
    }
  }

  const handleAdd = (event) => {
    const {name, value} = event.target;

    if(!form.temperaments.includes(value) && form.temperaments.length < 5) {
      setForm({
        ...form,
        temperaments: [...form.temperaments, value]
      })
    } 
  }

  const handleRemove = (i) => {
    const freshTemp = [...form.temperaments];

    freshTemp.splice(i, 1);

    setForm({
      ...form,
      temperaments: [...freshTemp]
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
    
    <form onSubmit={(event) => handleSubmit(event)} className={style.form}>
    <h1>Create a new card</h1>

    <div>
      <label htmlFor="name" className={style.label}>Breed Name:</label>
      <input type="text" name='name' placeholder='Breed name...' value={form.name} onChange={handleChange} className={style.input} required/>
      {errors.name && <p className={style.errors}>{errors.name}</p>}

    </div>

    <div onChange={handleChange}>
      <label htmlFor="height" name='height' className={style.label}>Height min and max:</label>
      {errors.height && <p className={style.errors}>{errors.height}</p>}
      <input type="text" name='heightmin' placeholder='Min...' value={form.heightmin} onChange={handleChange} className={style.input} required/>
      {errors.heightmin && <p className={style.errors}>{errors.heightmin}</p>}
      <input type="text" name="heightmax" placeholder='Max...' value={form.heightmax} onChange={handleChange} className={style.input} required/>
      {errors.heightmax && <p className={style.errors}>{errors.heightmax}</p>}

    </div>

    <div onChange={handleChange}>
      <label htmlFor="weight" name='weight' className={style.label}>Weight min & max:</label>
      {errors.weight && <p className={style.errors}>{errors.weight}</p>}
      <input type="text" name='weightmin' placeholder='Min...' value={form.weightmin} onChange={handleChange} className={style.input} required/>
      {errors.weightmin && <p className={style.errors}>{errors.weightmin}</p>}
      <input type="text" name="weightmax" placeholder='Max...' value={form.weightmax} onChange={handleChange} className={style.input} required/>
      {errors.weightmax && <p className={style.errors}>{errors.weightmax}</p>}

    </div>

    <div onChange={handleChange}>
      <label htmlFor="life_span" name='ages' className={style.label}>Life Span:</label>
      {errors.ages && <p className={style.errors}>{errors.ages}</p>}
      <input type="text" name='agesmin' placeholder='Min...' value={form.agesmin} onChange={handleChange} className={style.input} required/>
      {errors.agesmin && <p className={style.errors}>{errors.agesmin}</p>}
      <input type="text" name='agesmax' placeholder='Max...' value={form.agesmax} onChange={handleChange} className={style.input} required/>
      {errors.agesmax && <p className={style.errors}>{errors.agesmax}</p>}


    </div>

    <div>
      <label htmlFor="img" name='img'>Image:</label>
      <input type="file" name='image' placeholder='URL or file...' onChange={handleChange}/>
      {errors.image && <p className={style.errors}>{errors.image}</p>}
    </div>

    <div>
      <label htmlFor="temperaments" name='temperaments' className={style.label}>Temperaments:</label>
      <select onChange={handleAdd} disabled={form.temperaments.length === 5} name="temperaments" className={style.select}>
        {
          allTemperaments.map( (tp) =>
            <option key={tp.id} value={tp.name} className={style.option}>{tp.name}</option> )
        }
      </select>
      {errors.temperaments && <p className={style.errors}>{errors.temperaments}</p>}
      <small>Max 5 temperaments</small>
      {form.temperaments.map((tempe, i) => (
        <div key={i} className={style.tag}>
          <span className={style.span}>{tempe}</span>
          <button className={style.buttonTag} type='button' onClick={() => handleRemove(i)}>X</button>
        </div>
      ))}
    </div>

    <button type='submit' className={style.submit}>Create</button>
    </form>

    <div>
      <button onClick={() => {navigate("/home")}} className={style.backHome}>Back Home</button>
    </div>

    </div>

  )
}

export default Form;