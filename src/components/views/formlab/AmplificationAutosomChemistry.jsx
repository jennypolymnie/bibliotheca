import PropTypes from 'prop-types';

const AmplificationAutosomChemistry = [
    {
        id: 1, name: 'Choisir', value: 'Choisir', text: 'Choisir'
    },
    {
        id: 2, name: 'NGMSelect', value: 'NGMSelect', text: 'NGMSelect'
    },
    {
        id: 3, name: 'Fusion6C', value: 'Fusion6C', text: 'Fusion6C'
    },
    {
        id: 4, name: 'Autre', value: 'Autre', text: 'Autre'
    }

];

AmplificationAutosomChemistry.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired

};
export default AmplificationAutosomChemistry;
