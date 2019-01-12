import React from 'react'
import { Button } from 'semantic-ui-react'
import InputExemple from './InputExemple'
import './Article.css'
import TableRating from './TableRating'
import PropTypes from 'prop-types'


const Article = ({author, title, abstract, nature, hierarchieLevel, support, transfert, onClick}) => (
  
    
    <div className="Article">

        <div className = "Presentation">

            <div className = "Donnees" onClick={() => onClick(Article)}>
            <p>Authors: {author}</p>
            <p>Title: {title} </p>
            <p>Abstract: {abstract}</p>
            </div>

            <div className="Fitting">
         
            <TableRating 
            nature = {nature} 
            hierarchieLevel = {hierarchieLevel} 
            support = {support}
            transfert = {transfert}>
            </TableRating>
            </div>

        </div>

        <div className="Avis">
        <Button> Donnez votre avis </Button>
        <InputExemple info ="pos reviews" entree ="12" ></InputExemple>
        <InputExemple info ="nèg reviews" entree ="1" ></InputExemple>
        </div>
    </div>
)

Article.PropTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    nature: PropTypes.string.isRequired,
    niveauhierarchie: PropTypes.string.isRequired,
    support: PropTypes.string.isRequired,
    transfert: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Article