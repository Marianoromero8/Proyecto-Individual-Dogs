import React, { useState } from 'react'
import {WithOutContext as ReactTags} from 'react-tag-input'

const Form = ({onLogin}) => {

  const [tags, setTags] = useState([]);

  const [form, setForm] = useState({
    name:"",
    tamañomin:"",
    tamañomax:"",
    pesomin: "",
    pesomax: "",
    años:"",
    temperamento: []
  })
 
  const handleAdd = tag => {
    const newTag = [...tags, tag]

    setTags(newTag);
    setForm({
      ...form,
      temperamento: newTag.map(tag => tag.text)
    })
  }

  const handleDelete = del => {
    const newTag = tags.filter((tag, i) => i !== del);
    setTags(newTag);
    setForm({
      ...form,
      temperamento: newTag.map(tag => tag.text)
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(form)
    alert("Breed create successfuly")
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    const newState = {
      ...form,
      [name]: value
    };

    setForm(newState);

    
  }

  return (
    <div>
    
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
      <ReactTags tags={tags} handleAdd={handleAdd} handleDelete={handleDelete} placeholder='Add temperaments' value={form.temperamento} onChange={handleChange} />
      <small>Add 5 temperaments</small>
    </div>

    <button type='submit' onClick={handleSubmit}>Create</button>
    </form>

    </div>

  )
}

export default Form;