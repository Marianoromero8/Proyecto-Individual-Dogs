import React, { useEffect, useState } from 'react'
import Home from '../Home/Home';
import axios from 'axios';

const Pagination = ({dogs, onSearch, onClose}) => {


    const[pagina, setPagina] = useState(1);
    const[porPag, setPorPag] = useState(8);

    
    const startIndex = (pagina - 1);
    const endIndex = Math.min(startIndex + 8, dogs.length);
    const showDogs = dogs.slice(startIndex, endIndex)
    
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
            return ({error})
        }
    }, [])
    
    
    
    const max = Math.ceil(call.length / porPag);

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPagina(parseInt(pagina) + 1);
    }

    const backPage = () => {
        setInput(parseInt(input) - 1);
        setPagina(parseInt(pagina) - 1);
    }

    const onInput = (event) => {
        if(event.keyCode === 13){
            setPagina(parseInt(event.target.value))

            if(parseInt(event.target.value < 1) || parseInt(event.target.value) > Math.ceil(max) || isNaN(parseInt(event.target.value))){
                setPagina(1);
                setInput(1)
            } else{
                setPagina(parseInt(event.target.value))
            }
        }
    }

    const onChange = (event) => {
        setInput(event.target.value)
    }

    
    return (
    <div>
      <Home pagina={pagina} porPag={porPag} dogs={showDogs} onSearch={onSearch} onClose={onClose}/>
      <button disabled={pagina === 1 || pagina < 1} onClick={backPage}>Back</button>
      <input onChange={event => onChange(event)} onClick={event => onInput(event)} name='page' value={input} autoComplete='off'/>
      <p>de {max}</p>
      <button disabled={pagina === Math.ceil(max) || pagina > max} onClick={nextPage}>next</button>
    </div>
  )
}

export default Pagination;