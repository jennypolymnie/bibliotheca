import React from 'react'
import PropTypes from 'prop-types'

const Users = [
    { id: 1, name: 'Laboratoire des Sciences Judiciaires et de Médecine Légale' },
    { id: 2, name: 'Unité de Génétique Forensique' },
  ]

  Users.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}
  export default Users
