
import PropTypes from 'prop-types';

const Users = [
    {
        userID: 1, name: 'UGF', directorName: 'Vincent Castella', directorEmail: 'Vincent.Castella@chuv.ch', profil: 'Lab', website: 'www.ugf.ch'
    },
    {
        userID: 2, name: 'LSJML', directorName: 'Diane Seguin', directorEmail: 'Diane.Seguin@lsjml.ca', profil: 'Lab', website: 'www.lsjml.ca'
    },
    {
        userID: 3, name: 'Andrew Sutcliffe', directorName: 'Andrew Sutcliffe', directorEmail: 'asutcliffe@gmail.com', profil: 'Avocat', website: 'www.bareau.com'
    }

];

Users.PropTypes = {
    userID: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    directorEmail: PropTypes.string.isRequired,
    profil: PropTypes.string.isRequired
};
export default Users;
