import PropTypes from 'prop-types';

const SpermTest = [
    {
        id: 1, name: 'Choisir', value: 'Choisir', text: 'Choisir'
    },
    {
        id: 2, name: 'Christmas Tree', value: 'Christmas Tree', text: 'Christmas Tree'
    },
    {
        id: 3, name: 'PSA', value: 'PSA', text: 'PSA'
    },
    {
        id: 4, name: 'Autre', value: 'Autre', text: 'Autre'
    }

];

SpermTest.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

};
export default SpermTest;
