
import axios from 'axios';
const postUser = (user) => async (dispatch, getState) => {
    const response = await axios.post('http://localhost:5000/api/usuario/register', user);
    dispatch({ type: 'POST_USER', payload: response })
}

export const loginUser = (user) => async (dispatch, getState) => {    
    
    const response = await axios.post('http://localhost:5000/api/login', user);
    dispatch({ type: 'LOGIN_USER', payload: response.data })
}
export default postUser;