import PropTypes from 'prop-types'

const SalivaTest = [
    { id: 1, name: 'Choisir', value:'Choisir', text: 'Choisir'},
    { id: 2, name: 'RSID Saliva', value:'RSIDSaliva', text: 'RSID Saliva' },
    { id: 3, name: 'Autre', value:'Autre', text: 'Autre'},
    
  ]

   SalivaTest.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

}
  export default SalivaTest