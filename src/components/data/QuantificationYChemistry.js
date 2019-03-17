import PropTypes from 'prop-types';

const QuantificationYChemistry = [
    {
        id: 1, name: 'YHres', value: 'YHres', text: 'YHres'
    },
    {
        id: 2, name: 'Quantifiler Duo', value: 'QuantifilerDuo', text: 'Quantifiler Duo'
    },
    {
        id: 3, name: 'Quantifiler Trio', value: 'QuantifilerTrio', text: 'Quantifiler Trio'
    },
    {
        id: 4, name: 'Quantifiler HP', value: 'QuantifilerHp', text: 'Quantifiler HP'
    },
    {
        id: 5, name: 'Quantifiler Human', value: 'QuantifilerHuman', text: 'Quantifiler Human'
    },
    {
        id: 6, name: 'Autre', value: 'Autre', text: 'Autre'
    }
];

QuantificationYChemistry.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

};
export default QuantificationYChemistry;
