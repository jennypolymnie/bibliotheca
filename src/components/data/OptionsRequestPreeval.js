
import StainNature from './StainNature';
import Material from './Material';
import StainSupport from './StainSupport';

const OptionsRequestPreeval = [
    {
        id: 'nature', name: 'Nature de la trace', options: StainNature
    },
    {
        id: 'material', name: 'Matière du support', options: Material
    },
    {
        id: 'support', name: 'Support', options: StainSupport
    }
];

export default OptionsRequestPreeval;
