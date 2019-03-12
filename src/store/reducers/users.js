import {
    NEW_USER
} from '../actions/constants';


const initialState = {
    Users: []
};

function users(state = initialState, action) {
    switch (action.type) {
        case NEW_USER: {
            return Object.assign({}, state, {
                Users: [
                    ...state.Users,
                    {
                        userID: action.userID,
                        userName: action.userName,
                        userPassword: action.userPassword
                    }
                ]
            });
        }
        default:
            return state;
    }
}

export default users;
