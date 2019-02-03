import PropTypes from 'prop-types'

const BibliothecaStats = [
    { id: 1, name: 'TotalReaders', value:'totalreaders', text: 'Nombre de laboratoires lecteurs', total: 30},
    { id: 2, name: 'TotalArticles ', value:'totalarticles', text: "Nombre d'articles datant de 2017 à aujourd'hui présents dans la bibliothèque", total:40},
    { id: 3, name: 'TotalThesis', value:'totalthesis', text: 'Nombre de thèses présentes dans la bibliothèque', total: 50},
    { id: 4, name: 'TotalJournals', value:'totaljournals', text: 'Nombre de journaux cités dans la bibliothèque', total: 50},
    { id: 5, name: 'TotalMeetings', value:'totalmeetings', text: 'Conférences répertoriées dans la bibliothèque', total: 50},
  ]

  BibliothecaStats.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,

}
  export default BibliothecaStats