import axios from 'axios';
import {GET_ITINERARY} from'./type';

export const getItineraris = () => dispach =>{
   /*  dispach(setCitiesLoading()); */
    axios.get('http://localhost:5000/api/iteneraris')
    .then(res=>
        dispach({
            type: GET_ITINERARY,
            payload:res.data
        })
        )
}