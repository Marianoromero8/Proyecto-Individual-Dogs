import axios from 'axios';
export const ORDER_AZ_ZA = "ORDER_AZ_ZA";
export const TEMP_FILTER = "TEMP_FILTER";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";
export const ORDER_WEIGHTASC = "ORDER_WEIGHTASC";
export const ORDER_WEIGHTDESC = "ORDER_WEIGHTDESC";
export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const FETCH_ERROR = "FETCH_ERROR";
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS";
export const ORDER_API = "ORDER_API";
export const ORDER_DB = "ORDER_DB";
export const BY_NAME = "BY_NAME";
export const PAGINATION = "PAGINATION";
export const POST_DOG = "POST_DOG";
export const POST_DOG_FAIL = "POST_DOG_FAIL";
export const GET_DETAIL = "GET_DETAIL";

export const getAllDogs = () => {
    return async function(dispatch){
        try{
            const {data} = await axios.get('http://localhost:3001/api/dogs')
            return dispatch ({
                type: GET_ALL_DOGS,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: FETCH_ERROR,
                payload: error.message
            })
        }
    }
}

export const getAllTemperaments = () => {
    return async function(dispatch){
        try{
            const {data} = await axios.get('http://localhost:3001/api/temperaments')
            return dispatch({
                type: GET_ALL_TEMPERAMENTS,            
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type:FETCH_ERROR,
                payload: error.message
            })
        }
    }
}

export const searchByName = (name) => {
    return async function(dispatch){
    try{
    const {data} = await axios.get(`http://localhost:3001/api/dogs/name/name?name=${name}`)
    return dispatch({
        type: BY_NAME,
        payload: data
    })
    }
    catch(error){
    return dispatch({
        type:FETCH_ERROR,
        payload: error.message
    })
}
}
}

export const postDog = (payload) => {
    return async function(dispatch){
        try{
        const post = await axios.post('http://localhost:3001/api/dogs/register', payload)
        return dispatch({
            type: POST_DOG,
            payload: post.data
        })
        }
        catch(error){
           dispatch({
            type: POST_DOG_FAIL,
            payload: error.response.data
        })
    }
    }
}

export const tempFilter = (filter) => {
    return {
        type: TEMP_FILTER,
        payload: filter
    }
}

export const orderAZ = () => {
    return {
        type: ORDER_AZ,
    }
}

export const orderZA = () => {
    return {
        type: ORDER_ZA,
    }
}

export const orderWeightAsc = () => {
    return {
        type: ORDER_WEIGHTASC,
    }
}
export const orderWeightDesc = () => {
    return {
        type: ORDER_WEIGHTDESC,
    }
}

export const callDogsApi = () => {
    return {
        type: ORDER_API,
    }
}

export const callDogsDB = () => {
    return {
        type: ORDER_DB,    
    }
}


