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


// case NEW_USER: {
//     const i = action.userID;
//     return [
//         ...state.slice(0, i),
//         { ...state[i], userID: state[i].userID + 1 },
//         ...state.slice(i + 1)
//     ];
// }