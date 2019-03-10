import PropTypes from 'prop-types';

const AppUsers2 = [
    {
        Id: 1,
        userName: 'jenny',
        userPassword: 'biubiu1908'
    }
];

AppUsers2.PropTypes = {
    Id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired
};
export default AppUsers2;
