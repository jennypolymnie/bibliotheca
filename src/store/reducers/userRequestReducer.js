
import {
    SAVE_RESEARCH_REQUEST
} from '../actions/constants';


const userRequestReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_RESEARCH_REQUEST: {
            return [
                ...action.userRequest
            ];
        }
        default:
            return state;
    }
};

export default userRequestReducer;
