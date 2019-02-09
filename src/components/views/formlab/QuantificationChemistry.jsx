import PropTypes from 'prop-types';

const QuantificationChemistry = [
    {
        id: 1, name: 'Choisir', value: 'Choisir', text: 'Choisir'
    },
    {
        id: 2, name: 'YHres', value: 'YHres', text: 'YHres'
    },
    {
        id: 3, name: 'Quantifiler Duo', value: 'Quantifiler Duo', text: 'Quantifiler Duo'
    },
    {
        id: 4, name: 'Autre', value: 'Autre', text: 'Autre'
    }
];

QuantificationChemistry.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

};
export default QuantificationChemistry;
