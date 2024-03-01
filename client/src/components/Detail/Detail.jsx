import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import style from './Detail.module.css'


const Detail = () => {

  const { imageId } = useParams();
  const [breed, setBreed] = useState();
  const navigate = useNavigate();

  useEffect(() => {
     axios(`http://localhost:3001/api/dogs/${imageId}`)
        .then(
        ({data}) => {
          setBreed(data);
        })
        .catch(() => {alert ("Error found")})
  }, [])


  return breed ? ( 

  <>
  <div className={style.div}>
   
   <div>
   <img src={breed.image} alt={breed.name} className={style.image}/>
   </div>
   
   <div>
   <h1 className={style.name}>{breed.name}</h1>
   <h2 className={style.h2}>#{breed.id}</h2>
   <h2 className={style.h2}>Height: {breed.height}</h2>
   <h2 className={style.h2}>Weight: {breed.weight}</h2>
   <h2 className={style.h2}>Temperament: {breed.temperament}</h2>
   <h2 className={style.h2}>Ages: {breed.life_span}</h2>
   </div>

   <button onClick={() => {navigate("/home")}} className={style.back}>Back</button>
          
  </div>
  </>
  ) : <h1 className={style.loading}>LOADING...</h1>

}

export default Detail;