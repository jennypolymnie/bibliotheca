
import {
    UPDATE_PROFILE
} from '../actions/constants';


const initialState = {
    profile: {}
};

function updateProfile(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROFILE: {
            return Object.assign({}, state, {
                profile: {
                    ...state.profile,
                    labName: action.labName,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    country: action.country,
                    website: action.website,
                    technicalEmail: action.technicalEmail,
                    interpretationEmail: action.interpretationEmail
                }
            });
        }
        default:
            return state;
    }
}

export default updateProfile;
