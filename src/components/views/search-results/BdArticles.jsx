import PropTypes from 'prop-types';

const BdArticles = [
    {
        id: 1,
        authors: 'David G. Casey, Judy Price',
        title: 'The sensitivity and specificity of the RSID-saliva kit for the detection of human salivary amylse in the Forensic Science Laboratory, Dublin, Ireland',
        abstract: 'We demonstrate here that the RSID™-saliva test can be used as a test for human salivary...',
        journal: 'Forensic Science International',
        link: 'https://www.sciencedirect.com/science/article/pii/S0379073809004204'
    },
    {
        id: 2, authors: 'Andrew', title: 'Un nouveau robot pour la génétique forensique', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International'
    },
    {
        id: 3, authors: 'Diana', title: 'Des nouveaux DIP STR', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International'
    },
    {
        id: 4, authors: 'Gabriel', title: 'Une nouvelle méthode de détection', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International'
    },
    {
        id: 5, authors: 'Paul', title: 'La nouvelle application en génétique', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International'
    }
];

BdArticles.PropTypes = {
    id: PropTypes.number.isRequired,
    authors: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};
export default BdArticles;
