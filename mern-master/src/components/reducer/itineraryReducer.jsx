import{GET_ITINERARY} from '../action/type';

const initialState={
    itineraris:[]
}

export default function(state = initialState,action){
    switch (action.type){
        case GET_ITINERARY:
            return{
                ...state,
                itineraris:action.payload
            };
            default:
                return state;
    }
}