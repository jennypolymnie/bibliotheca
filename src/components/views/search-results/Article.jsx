import React from 'react';
import { Button, Rating } from 'semantic-ui-react';
import InputExemple from './InputExemple';
import TableCheck from './TableCheck';
import PropTypes from 'prop-types';
import BdArticles from './BdArticles';
import './stylesheets/Article.css';



const Article = ({author, title, abstract,link, nature, hierarchyLevel, support, transfert, onClick}) => (
  
    
    <div className="Article">

        <div className = "Presentation">

            <div className = "MainData" onClick={() => onClick(Article)}>
                <p>Authors: {author}</p>
                <p>Title: {title} </p>
                <p>Abstract: {abstract}</p>
                <p>Lien: {link}</p>
            </div>

            <div className="Elements">
                <TableCheck
                    nature = {nature} 
                    hierarchyLevel = {hierarchyLevel} 
                    support = {support}
                    transfert = {transfert}>
                </TableCheck>
            </div>

        </div>

        <div className="Review">
            <Button> Donnez votre avis </Button>
            <p>Rigueur</p>
            <Rating disabled icon='star' defaultRating={2} maxRating={5} />
            <p>Analyse</p>
            <Rating disabled icon='star' defaultRating={3} maxRating={5} />
            <p>Résultats</p>
            <Rating disabled icon='star' defaultRating={4} maxRating={5} />
            <p>Interprétation</p>
            <Rating disabled icon='star' defaultRating={3} maxRating={5} />
            <InputExemple info="Nombre d'avis"></InputExemple>
            
        </div>
        
    </div>
)

Article.PropTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    nature: PropTypes.string.isRequired,
    hierarchyLevel: PropTypes.string.isRequired,
    support: PropTypes.string.isRequired,
    transfert: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired
}

export default Article