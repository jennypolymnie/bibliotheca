import PropTypes from 'prop-types';

const BloodTest = [
    {
        id: 1, name: 'Choisir', value: 'Choisir', text: 'Choisir'
    },
    {
        id: 2, name: 'Hexagon OBTI', value: 'HexagonOBTI', text: 'Hexagon OBTI'
    },
    {
        id: 3, name: 'Hemastix', value: 'Hemastix', text: 'Hemastix'
    },
    {
        id: 4, name: 'Autre', value: 'Autre', text: 'Autre'
    }

];

BloodTest.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

};
export default BloodTest;
