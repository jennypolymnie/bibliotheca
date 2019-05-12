import StainSupport from './StainSupport';
import StainNature from './StainNature';
import TransfertTypes from './TransfertTypes';
import Time from './Time';
import ScreeningTest from './ScreeningTest';
import Concentration from './Concentration';
import RelevantPopulation from './RelevantPopulation';
import AmplificationAutosomChemistry from './AmplificationAutoChemistry';
import ActivityContext from './ActivityContext';
import EnvironmentalConditions from './EnvironmentalConditions';

const OptionsRequestData = [

    {
        id: 'population', name: 'Population pertinente', options: RelevantPopulation, categories: ['subsource']
    },
    {
        id: 'marqueurs', name: 'Kit d\'amplication', options: AmplificationAutosomChemistry, categories: ['subsource']
    },
    {
        id: 'nature', name: 'Nature supposée de la trace', options: StainNature, categories: ['source']
    },
    {
        id: 'support', name: 'Support de la trace', options: StainSupport, categories: ['source', 'subactivity', 'activity']
    },
    {
        id: 'concentration', name: 'Concentration [ng/ul]', options: Concentration, categories: ['source', 'subactivity']
    },
    {
        id: 'test indicatif', name: 'Test indicatif', options: ScreeningTest, categories: ['source', 'subactivity']
    },
    // {
    //     id: 7, name: 'Fluides à distinguer', options: ScreeningTest, categories: ['subactivity']
    // },
    // {
    //     id: 8, name: 'Test indicatif additionnel', options: ScreeningTest, categories: ['subactivity']
    // },
    {
        id: 'nature', name: 'Nature de la trace', options: StainNature, categories: ['activity']
    },
    {
        id: 'temps', name: 'Temps entre faits et prélèvements', options: Time, categories: ['activity']
    },
    {
        id: 'transfert', name: 'Type de transfert supposé', options: TransfertTypes, categories: ['activity']
    },
    {
        id: 'activité', name: 'Type d\'activité', options: ActivityContext, categories: ['activity']
    },
    {
        id: 'conditions', name: 'Conditions environnementales', options: EnvironmentalConditions, categories: ['activity']
    }
];

export default OptionsRequestData;
