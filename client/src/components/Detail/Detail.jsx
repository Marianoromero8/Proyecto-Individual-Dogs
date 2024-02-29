import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import style from './Detail.module.css'


const Detail= () => {

  const { id } = useParams();
  const [dog, setDog] = useState();
  const navigate = useNavigate()

   useEffect (() => {
    axios(`http://localhost:3001/api/dogs/${id}`)
      .then(
        ({data}) => {
        if(data.name){
        setDog(data);
          }else {
             alert('Dog not found')
            }
        })
    }, [])


  return dog ? ( 

    <>

    <div className={style.div}>
   
   <div>
   <img src={dog.image} alt={dog.name} className={style.image}/>
   </div>
   
   <div>
   <h1 className={style.name}>{dog.name}</h1>
   <h2 className={style.h2}>#{dog.id}</h2>
   <h2 className={style.h2}>{dog.height}</h2>
   <h2 className={style.h2}>{dog.weight}</h2>
   <h2 className={style.h2}>{dog.temperament}</h2>
   <h2 className={style.h2}>{dog.life_span}</h2>
   </div>

   <button onClick={() => {navigate("/home")}} className={style.back}>Back</button>
          
   </div>
   
   </>
   ) : <h1 className={style.loading}>LOADING...</h1>

}

export default Detail;