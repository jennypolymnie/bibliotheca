import Material from './Material';

const StainSupportSubCategory = [
    {
        id: 1, name: 'Matériel', options: Material, categories: ['subsource']
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
        id: 6, name: 'Tests indicatifs', options: ScreeningTest, categories: ['source', 'subactivity']
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
        id: 10, name: 'Temps entre faits et prélèvements', options: StainNature, categories: ['activity']
    },
    {
        id: 11, name: 'Type de transfert supposé', options: StainNature, categories: ['activity']
    },
    {
        id: 12, name: 'Type d\'activité', options: ActivityContext, categories: ['activity']
    }
];

export default StainSupportSubCategory;
