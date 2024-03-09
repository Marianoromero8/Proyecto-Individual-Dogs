import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import axios from 'axios';
import style from './Pagination.module.css'

const Pagination = ({dogs, onSearch, onClose}) => {

    
    const[pagina, setPagina] = useState(1);
    const[porPag, setPorPag] = useState(8);
    const [input, setInput] = useState(1);
    const [call, setCall] = useState([])

    
    
    useEffect(() => {
        try{
            axios('http://localhost:3001/api/dogs')
            .then(response => {
                setCall(response.data);
            })
            .catch(error => {
                return ({error})
            })
        }
        catch(error){
            return ({error: error.message})
        }
    }, [])
    
    
    const startIndex = (pagina - 1) * porPag;
    const endIndex = Math.min(startIndex + porPag, dogs.length);
    const showDogs = dogs.slice(startIndex, endIndex)
    
    
    const max = Math.ceil(call.length / porPag);
    
    
    const nextPage = () => {
        setInput(input + 1);
        setPagina(pagina + 1);
    }

    const backPage = () => {
        setInput(input - 1);
        setPagina(pagina - 1);
    }
    
    const onInput = (e) => {
        const val = (e.target.value)
        
        if ( val < 1 || val > Math.ceil(max) || isNaN(val)){
            setPagina(1);
            setInput(1)
        } else{
            setPagina((e.target.value))
        }
    }
    
    
    
    const onChange = (e) => {
        setInput(e.target.value)
    }
    
    return (
        <>
      <Home pagina={pagina} porPag={porPag} dogs={showDogs} onSearch={onSearch} onClose={onClose}/>
      <div className={style.div}>
      <button disabled={pagina === 1 || pagina < 1} onClick={backPage} className={style.button}>Back</button>
      <input onChange={event => onChange(event)} onClick={event => onInput(event)} name='page' value={input} autoComplete='off' className={style.input}/>
      <button disabled={pagina === Math.ceil(max) || pagina > max} onClick={nextPage} className={style.button}>Next</button>
      <p className={style.p}>de {max}</p>
      </div>
    </>
  )
}

export default Pagination;