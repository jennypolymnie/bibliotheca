import PropTypes from 'prop-types';

const ExtractionRNAChemistry = [
    {
        id: 1, name: 'Qiamp', value: 'qiamp', text: 'Qiamp'
    },
    {
        id: 2, name: 'Investigator', value: 'investigator', text: 'Investigator'
    },
    {
        id: 3, name: 'Autre', value: 'Autre', text: 'Autre'
    }

];

ExtractionRNAChemistry.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

};
export default ExtractionRNAChemistry;
