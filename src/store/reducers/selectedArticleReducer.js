import {
    SAVE_SELECTED_ARTICLE
} from '../actions/constants';


const selectedArticleReducer = (state = '', action) => {
    switch (action.type) {
        case SAVE_SELECTED_ARTICLE: {
            return action.selectedArticleId;
        }
        default:
            return state;
    }
};

export default selectedArticleReducer;
