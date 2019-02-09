import PropTypes from 'prop-types';

const BdArticles = [
    {
        id: 1, authors: 'Jenny', title: 'Identification des taches de sang', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International'
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
