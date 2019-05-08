import {
    NEW_USER, USERNAME_ALREADYUSED
} from '../actions/constants';

//  user name already used

const forbiddenUserName = [];

export function fonctionName({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === NEW_USER) {
                const foundUserName = forbiddenUserName.filter(newUserName => action.userName.includes(newUserName));
                if (foundUserName.length) {
                    return dispatch({ type: USERNAME_ALREADYUSED });
                }
            }
            return next(action);
        };
    };
}
