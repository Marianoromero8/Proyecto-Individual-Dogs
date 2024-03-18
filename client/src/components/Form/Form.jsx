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
    agemin:"",
    agemax:"",
    image:"",
    temperament: []
  })
  const [form, setForm] = useState({
    name:"",
    heightmin:"",
    heightmax:"",
    weightmin: "",
    weightmax: "",
    agemin:"",
    agemax:"",
    image:"",
    temperament: []
  })
  
  useEffect(() => {
    setErrors(validations(form))
  }, [form.name, form.heightmin, form.heightmax, form.weightmin, form.weightmax, form.agemin, form.agemax, form.temperament.length])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name && form.weightmin && form.weightmax && form.heightmin && form.heightmax && form.agemin && form.agemax && form.temperament.length
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
        temperament: [],
      });
      alert("Breed created");
    } else {
      alert("All Necessary fields must be filled");
    }
  }

  const handleAdd = (event) => {
    const {name, value} = event.target;

    if(!form.temperament.includes(value) && form.temperament.length < 5) {
      setForm({
        ...form,
        temperament: [...form.temperament, value]
      })
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
      <label htmlFor="life_span" name='age' className={style.label}>Life Span:</label>
      {errors.age && <p className={style.errors}>{errors.age}</p>}
      <input type="text" name='agemin' placeholder='Min...' value={form.agemin} onChange={handleChange} className={style.input} required/>
      {errors.agemin && <p className={style.errors}>{errors.agemin}</p>}
      <input type="text" name='agemax' placeholder='Max...' value={form.agemax} onChange={handleChange} className={style.input} required/>
      {errors.agemax && <p className={style.errors}>{errors.agemax}</p>}


    </div>

    <div>
      <label htmlFor="img" name='img'>Image:</label>
      <input type="file" name='image' placeholder='URL or file...' onChange={handleChange}/>
      {errors.image && <p className={style.errors}>{errors.image}</p>}
    </div>

    <div>
      <label htmlFor="temperament" name='temperament' className={style.label}>Temperaments:</label>
      <select onChange={handleAdd} disabled={form.temperament.length === 5} name="temperament" className={style.select}>
        {
          allTemperaments.map( (tp) =>
            <option key={tp.id} value={tp.name} className={style.option}>{tp.name}</option> )
        }
      </select>
      {errors.temperament && <p className={style.errors}>{errors.temperament}</p>}
      <small>Max 5 temperaments</small>
      {form.temperament.map((tempe, i) => (
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