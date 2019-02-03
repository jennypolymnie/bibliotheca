import PropTypes from 'prop-types'

const ExtractionChemistry = [
    { id: 1, name: 'Choisir', value:'Choisir', text: 'Choisir'},
    { id: 2, name: 'Qiamp', value:'qiamp', text: 'Qiamp' },
    { id: 3, name: 'Investigator', value:'investigator', text: "Investigator"},
    { id: 4, name: 'Autre', value:'Autre', text: 'Autre'},
    
  ]

    ExtractionChemistry.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

}
  export default ExtractionChemistry
