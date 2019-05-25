
import {
    SAVE_RESEARCH_REQUEST
} from '../actions/constants';


const userRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_RESEARCH_REQUEST: {
            return {
                ...state,
                options: action.userRequest.options,
                category: action.userRequest.category
            };
        }
        default:
            return state;
    }
};

export default userRequestReducer;
