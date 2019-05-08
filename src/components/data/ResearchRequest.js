import relevantPopulationOptions from './RelevantPopulation';
import amplificationKitOptions from './AmplificationAutoChemistry';
import natureOptions from './StainNature';
import supportOptions from './StainSupport';
import concentrationOptions from './Concentration';
import preliminaryTestOptions from './ScreeningTest';
import delayOptions from './Time';
import transfertOptions from './TransfertTypes';
import activityTypeOptions from './ActivityContext';
import environmentalConditionsOptions from './EnvironmentalConditions';
import levelOptions from './Hierarchy';
import materialOptions from './Material';

const researchRequest = {

    relevantPopulation: relevantPopulationOptions,
    amplificationKit: amplificationKitOptions,
    supposedNature: natureOptions,
    sourceSupport: supportOptions,
    concentration: concentrationOptions,
    sourcePreliminaryTest: preliminaryTestOptions,
    activitySupport: supportOptions,
    activityNature: natureOptions,
    delay: delayOptions,
    transfert: transfertOptions,
    activityType: activityTypeOptions,
    environmentalConditions: environmentalConditionsOptions,
    level: levelOptions,
    preevalNature: natureOptions,
    material: materialOptions,
    preevalSupport: supportOptions

};
export default researchRequest;
