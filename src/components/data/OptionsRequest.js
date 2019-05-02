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

const OptionsRequest = [

    {
        id: 1, name: 'Population pertinente', options: RelevantPopulation, categories: ['subsource']
    },
    {
        id: 2, name: 'Kit d\'amplication', options: AmplificationAutosomChemistry, categories: ['subsource']
    },
    {
        id: 3, name: 'Nature supposée de la trace', options: StainNature, categories: ['source']
    },
    {
        id: 4, name: 'Support de la trace', options: StainSupport, categories: ['source', 'subactivity', 'activity']
    },
    {
        id: 5, name: 'Concentration [ng/ul]', options: Concentration, categories: ['source', 'subactivity']
    },
    {
        id: 6, name: 'Test indicatif', options: ScreeningTest, categories: ['source', 'subactivity']
    },
    {
        id: 7, name: 'Fluides à distinguer', options: ScreeningTest, categories: ['subactivity']
    },
    {
        id: 8, name: 'Test indicatif additionnel', options: ScreeningTest, categories: ['subactivity']
    },
    {
        id: 9, name: 'Nature de la trace', options: StainNature, categories: ['activity']
    },
    {
        id: 10, name: 'Temps entre faits et prélèvements', options: Time, categories: ['activity']
    },
    {
        id: 11, name: 'Type de transfert supposé', options: TransfertTypes, categories: ['activity']
    },
    {
        id: 12, name: 'Type d\'activité', options: ActivityContext, categories: ['activity']
    },
    {
        id: 13, name: 'Conditions environnementales', options: EnvironmentalConditions, categories: ['activity']
    }
];

export default OptionsRequest;
