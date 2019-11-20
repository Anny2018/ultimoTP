/* const initilState = { cities: [] };
export default (state = initilState, action) => {
    console.log(action.type);
    
    switch (action.type) {
        case 'GET_CITIES': return {
            ...state,
            cities: action.payload
        }
        case 'PRUEBA': {
            console.log(action.payload);
            
        }
        default: return state;
    }
}; */

import{GET_CITIES} from '../action/type';

const initialState={
    cities:[]
}

export default function(state = initialState,action){
    switch (action.type){
        case GET_CITIES:
            return{
                ...state,
                cities:action.payload
            };
            default:
                return state;
    }
}