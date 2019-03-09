import PropTypes from 'prop-types';

const AppUsers = [
    {
        userID: 1, userName: '', userPassword: ''
    }

];

AppUsers.PropTypes = {
    userID: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired
};
export default AppUsers;
