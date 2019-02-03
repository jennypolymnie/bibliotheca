import PropTypes from 'prop-types'

const AmplificationYChemistry = [
    { id: 1, name: 'Choisir', value:'Choisir', text: 'Choisir'},
    { id: 2, name: 'YFiler Plus', value:'YFiler Plus', text: 'YFiler Plus' },
    { id: 3, name: 'Autre', value:'Autre', text: 'Autre'},
    
  ]

    AmplificationYChemistry.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

}
  export default AmplificationYChemistry