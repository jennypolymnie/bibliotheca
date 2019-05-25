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
        id: 'nature', name: 'Nature supposée de la trace', options: StainNature, categories: ['source', 'bayesianNetworkSource']
    },
    {
        id: 'support', name: 'Support de la trace', options: StainSupport, categories: ['source', 'subactivity', 'activity', 'bayesianNetworkSource', 'bayesianNetworkActivity']
    },
    {
        id: 'concentration', name: 'Concentration [ng/ul]', options: Concentration, categories: ['source', 'subactivity', 'bayesianNetworkSource']
    },
    {
        id: 'test indicatif', name: 'Test indicatif', options: ScreeningTest, categories: ['source', 'subactivity', 'bayesianNetworkSource']
    },
    // {
    //     id: 7, name: 'Fluides à distinguer', options: ScreeningTest, categories: ['subactivity']
    // },
    // {
    //     id: 8, name: 'Test indicatif additionnel', options: ScreeningTest, categories: ['subactivity']
    // },
    {
        id: 'nature', name: 'Nature de la trace', options: StainNature, categories: ['activity', 'bayesianNetworkActivity']
    },
    {
        id: 'temps', name: 'Temps entre faits et prélèvements', options: Time, categories: ['activity', 'bayesianNetworkActivity']
    },
    {
        id: 'transfert', name: 'Type de transfert supposé', options: TransfertTypes, categories: ['activity', 'bayesianNetworkActivity']
    },
    {
        id: 'activité', name: 'Type d\'activité', options: ActivityContext, categories: ['activity', 'bayesianNetworkActivity']
    },
    {
        id: 'conditions', name: 'Conditions environnementales', options: EnvironmentalConditions, categories: ['activity', 'bayesianNetworkActivity']
    }
];

export default OptionsRequestData;
