import salivaTestOptions from './SalivaTest';
import bloodTestOptions from './BloodTest';
import spermTestOptions from './SpermTest';
import urinaTestOptions from './UrinaTest';
import vaginalTestOptions from './VaginalTest';
import contactTestOptions from './ContactTest';
import extractionDNAChemistryOptions from './ExtractionDNAChemistry';
import extractionRNAChemistryOptions from './ExtractionRNAChemistry';
import quantificationAutosomalChemistryOptions from './QuantificationAutosomalChemistry';
import quantificationYChemistryOptions from './QuantificationYChemistry';
import amplificationAutoChemistryOptions from './AmplificationAutoChemistry';
import amplificationYChemistryOptions from './AmplificationYChemistry';
import amplificationXChemistryOptions from './AmplificationXChemistry';
import concentrationChemistryOptions from './ConcentrationChemistryOptions';
import researchThemesOptions from './ResearchThemes';


const profile = {

    labName: 'UGF',
    firstName: 'Vincent',
    lastName: 'Castella',
    country: 'Suisse',
    website: 'www.curml.ch',
    technicalEmail: 'marielaure.morerod@chuv.ch',
    interpretationEmail: 'vincent.castella@chuv.ch',
    salivaTest: ['RSID Saliva', 'amylase'],
    salivaTestOptions,
    bloodTest: ['HexagonOBTI'],
    bloodTestOptions,
    spermTest: ['ChristmasTree'],
    spermTestOptions,
    urinaTest: ['RSIDUrine'],
    urinaTestOptions,
    vaginalTest: ['Autre'],
    vaginalTestOptions,
    contactTest: ['DiamondDye'],
    contactTestOptions,
    extractionDNAChemistry: ['investigator'],
    extractionDNAChemistryOptions,
    extractionRNAChemistry: ['investigator'],
    extractionRNAChemistryOptions,
    concentrationChemistry: ['investigator'],
    concentrationChemistryOptions,
    quantificationAutosomalChemistry: ['InvestigatorQuantiplexKit'],
    quantificationAutosomalChemistryOptions,
    quantificationYChemistry: ['QuantifilerTrio'],
    quantificationYChemistryOptions,
    amplificationAutoChemistry: ['GlobalFilerPCRAmplification'],
    amplificationAutoChemistryOptions,
    amplificationYChemistry: ['PowerPlexY23'],
    amplificationYChemistryOptions,
    amplificationXChemistry: ['Fusion6C'],
    amplificationXChemistryOptions,
    researchThemes: {
        haplotypeY: true,
        mixture: true,
        methylation: true
    },
    researchThemesOptions
};
export default profile;
