import PropTypes from 'prop-types'

const TableQuestions = [
    { id: 1, label: 'Les expériences menées (en nombre et en qualité) permettent de répondre aux questions posées', name: 'rigor',value: 'qualityquantity'},
    { id: 2, label: 'Les expériences menées sont de qualité mais insuffisantes pour répondre aux questions posées', name:'rigor', value: 'quality'},
    { id: 3, label: 'Les expériences menées ne permettent pas de répondre aux questions posées', name:'rigor', value: 'poor'},
    { id: 4, label: 'détaillée, transparente, et correctement appliquée', name:'stat', value: 'detailedTransparentCorrect'},
    { id: 5, label: 'détaillée, transparente, mais faussement appliquée', name:'stat', value: 'detailedTransparentUncorrect'},
    { id: 6, label: 'détaillée, transparente mais inadaptée', name:'stat', value: 'inadapted'},
    { id: 7, label: 'mentionnée mais non détaillée', name:'stat', value: 'mentionned'},
    { id: 8, label: 'Suffisants et convaincants', name:'result', value: 'suffisants'},
    { id: 9, label:'Insuffisants pour tirer des conclusions', name:'result', value: 'insuffisants'},
    { id: 10, label:'Biaisés', name:'result', value: 'biaisés'},
    { id: 11, label:"Les résultats sont tous interprétés, détaillés et comparés à d'autres études", name:'interpret', value: 'interpreted'},
    { id: 12, label:"Les résultats sont tous interprétés, détaillés mais ne sont pas comparés à d'autres études", name:'interpret', value: 'notenough'},
    { id: 13, label:"Certains résultats, différents de la majorité, n'ont pas été interprétés", name:'interpret', value: 'uninterpreted'},
  ]

  TableQuestions.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,

}
  export default TableQuestions
