
function users(state = [], action) {
    switch (action.type) {
        case 'NEW_USER': {
            const i = action.userID;
            return [
                ...state.slice(0, i),
                { ...state[i], userID: state[i].userID + 1 },
                ...state.slice(i + 1)
            ];
        }
        default:
            return state;
    }
}

export default users;
