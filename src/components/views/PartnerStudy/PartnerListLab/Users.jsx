
import PropTypes from 'prop-types'

const Users = [
    { id: 1, name: 'UGF', directorName:'Vincent Castella', directorEmail: 'Vincent.Castella@chuv.ch', profil: 'Lab' },
    { id: 2, name: 'LSJML', directorName:'Diane Seguin', directorEmail: 'Diane.Seguin@lsjml.ca', profil: 'Lab' },
    { id: 3, name: 'Andrew Sutcliffe', directorName:'Andrew Sutcliffe', directorEmail: 'asutcliffe@gmail.com', profil: 'Avocat' },
   
  ]

  Users.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    directorEmail: PropTypes.string.isRequired,
    profil: PropTypes.string.isRequired,
}
  export default Users