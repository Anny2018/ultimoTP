import {POST_USER,LOGIN_USER} from '../action/type'
const initilState = { user: {}, login:{} };
export default (state = initilState, action) => {
    
    switch (action.type) {
        case POST_USER: return {
            ...state,
            user: action.payload
        }
        case LOGIN_USER: return {
            ...state,
            login: action.payload
        }
        default: return state;
    }
};