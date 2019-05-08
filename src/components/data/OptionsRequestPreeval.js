
import StainNature from './StainNature';
import Material from './Material';
import StainSupport from './StainSupport';

const OptionsRequestPreeval = [
    {
        id: 1, name: 'Nature de la trace', options: StainNature
    },
    {
        id: 1, name: 'Matière du support', options: Material
    },

    {
        id: 3, name: 'Support', options: StainSupport
    }
];

export default OptionsRequestPreeval;
