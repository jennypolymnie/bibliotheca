
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
            console.log('HERE');
            return state;
    }
};

export default userRequestReducer;
