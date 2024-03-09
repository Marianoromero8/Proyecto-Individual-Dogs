import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, ORDER_API, ORDER_AZ, ORDER_DB, ORDER_WEIGHTASC, ORDER_WEIGHTDESC, ORDER_ZA, TEMP_FILTER } from "./actions"

const initialState = {
    inmutableDogs: [],
    dogs: [],
    temperaments: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_DOGS: 
        return{
            ...state,
            dogs: action.payload,
            inmutableDogs: action.payload
        }
        case GET_ALL_TEMPERAMENTS:
        return{
            ...state,
            temperaments: action.payload
        }

        case TEMP_FILTER:
            if(action.payload === 'All'){
                return {...state, dogs: [...state.inmutableDogs]}
            }
            const filtByTemp = [...state.inmutableDogs].filter(dg => dg.temperament?.includes(action.payload))
            return{
                ...state,
                dogs: filtByTemp
            }

        case ORDER_AZ:
            const orderAZ = [...state.inmutableDogs].sort((a, b) => a.name.localeCompare(b.name))
            return{
                ...state,
                dogs: orderAZ
            }
        case ORDER_ZA:
            const orderZA = [...state.inmutableDogs].sort((a,b) => b.name.localeCompare(a.name))
            return {
                ...state,
                dogs: orderZA
            }
        case ORDER_WEIGHTASC:
            const orderweightasc = [...state.inmutableDogs].sort((a, b) => a.weight?.split('-')[1] - b.weight?.split('-')[1])
            return{
                ...state,
                dogs: orderweightasc
            }
        case ORDER_WEIGHTDESC:
            const orderweightdesc = [...state.inmutableDogs].sort((a, b) => b.weight?.split('-')[1] - a.weight?.split('-')[1])
            return{
                ...state,
                dogs: orderweightdesc
            }
        case ORDER_API:
            if(action.payload === 'All'){
                return {...state, dogs: [...state.inmutableDogs]}
            }
            const apiDogs = [...state.inmutableDogs].filter(dg => dg.source === 'API')
            const sortApi = apiDogs.sort((a, b) => a.name.localeCompare(b.name))
            return{
                ...state,
                dogs: sortApi
            }
        case ORDER_DB:
            if(action.payload === 'All'){
                return {...state, dogs: [...state.inmutableDogs]}
            }
            const dbDogs = [...state.inmutableDogs].filter(dg => dg.source === 'DB');
            const sortDB = dbDogs.sort((a, b) => a.name.localeCompare(b.name))
            return{
                ...state,
                dogs: sortDB
            }

            default:
                return state
                    
                
    }
}

export default reducer;