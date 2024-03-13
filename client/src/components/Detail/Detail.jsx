import { useEffect, useState } from 'react';
import style from './Detail.module.css'
import axios from 'axios'

const Detail = ({imageId, toggelModal}) => {
  const[img, setImg] = useState({})


  useEffect(() => {
    const resData = async () => {
      try{
      const {data} = await axios.get(`http://localhost:3001/api/dogs/${imageId}`)
      setImg(data)
      }
      catch(error){
       console.log(error)
       throw Error (error.message)
      }
    }
    resData()
  }, [])
 
  return img ? ( 

  <>
  <div className={style.div}>
   
   <div>
   <img src={img.image} alt={img.name} className={style.image}/>
   </div>
   
   <div>
   <h1 className={style.name}>{img.name}</h1>
   <h2 className={style.h2}>#{img.id}</h2>
   <h2 className={style.h2}>Height: {img.heightmin} - {img.heightmax}cm</h2>
   <h2 className={style.h2}>Weight: {img.weightmin} - {img.weightmax}kg</h2>
   <h2 className={style.h2}>Temperament: {img.temperament}</h2>
   <h2 className={style.h2}>Age: {img.agemin} to {img.agemax} years</h2>
   </div>

   <button onClick={toggelModal} className={style.back}>Close</button>
          
  </div>
  </>
  ) : <h1 className={style.loading}>LOADING...</h1>

}

export default Detail;