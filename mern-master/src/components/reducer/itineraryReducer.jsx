import{GET_ITINERARY} from '../action/type';

const initialState={
    itineraris:[]
}

export default function(stateitinerary=initialState,action){
    switch (action.type){
        case GET_ITINERARY:
            return{
                ...stateitinerary,
                itineraris: action.payload
            };
            default:
                return stateitinerary;
    }
}