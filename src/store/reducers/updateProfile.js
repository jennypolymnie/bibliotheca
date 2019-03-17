
import {
    SAVE_PROFILE
} from '../actions/constants';


const initialState = {
};

function updateProfile(state = initialState, action) {
    switch (action.type) {
        case SAVE_PROFILE: {
            return Object.assign({}, state, {
                ...state,
                ...action.profile
            });
        }
        default:
            return state;
    }
}

export default updateProfile;
