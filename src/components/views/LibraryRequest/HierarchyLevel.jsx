
import PropTypes from 'prop-types'

const HierarchyLevel = [
    { id: 1, name: 'SubSource', value:'subsource', text: 'SubSource' },
    { id: 2, name: 'Source', value:'source', text: 'Source'},
    { id: 3, name: 'Activity', value:'activity', text: 'Activity'},
    { id: 4, name: 'Delit', value:'delit', text: 'Delit'},
  ]

  HierarchyLevel.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,

}
  export default HierarchyLevel