import { BY_NAME, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, ORDER_API, ORDER_AZ, ORDER_DB, ORDER_WEIGHTASC, ORDER_WEIGHTDESC, ORDER_ZA, TEMP_FILTER, POST_DOG, POST_DOG_FAIL, GET_DETAIL } from "./actions"

const initialState = {
    inmutableDogs: [],
    dogs: [],
    temperaments: [],
    dogDetail: {}
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
        case GET_DETAIL:
        return{
            ...state,
            dogDetail: action.payload
            }
 
        case TEMP_FILTER:
            if(action.payload === 'All'){
            return {
                ...state, 
                dogs: [...state.inmutableDogs]}
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
            const orderweightasc = [...state.inmutableDogs].sort((a, b) => {
                return a.weightmax - b.weightmax
            })
            return{
                ...state,
                dogs: orderweightasc
            }
        case ORDER_WEIGHTDESC:
            const orderweightdesc = [...state.inmutableDogs].sort((a, b) => {
                return b.weightmax - a.weightmax
            }
            )
            return{
                ...state,
                dogs: orderweightdesc
            }
        case ORDER_API:
            const apiDogs = [...state.inmutableDogs].filter(dg => !isNaN(dg.id) )
            return{
                ...state,
                dogs: apiDogs
            }
        case ORDER_DB:
            const dbDogs = [...state.inmutableDogs].filter(dg => isNaN(dg.id));
            return{
                ...state,
                dogs: dbDogs
            }
        case BY_NAME:
            return{
                ...state,
                dogs: action.payload
            }
        case POST_DOG:
            return{
                ...state,
            }
        case POST_DOG_FAIL: 
            return{
                ...state,
                error: action.payload
            }
        default:
                return state
    }
}

export default reducer;