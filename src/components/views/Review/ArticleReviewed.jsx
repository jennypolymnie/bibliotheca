import React from 'react';
import { Rating } from 'semantic-ui-react';
import InputExemple from '../search-results/InputExemple';
import PropTypes from 'prop-types';
import './ArticleReviewed.css';



const ArticleReviewed = ({author, title, abstract,link, onClick}) => (
  
    
    <div className="Article">

        <div className = "Presentation">

            <div className = "MainData" onClick={() => onClick(ArticleReviewed)}>
                <p>Authors: {author}</p>
                <p>Title: {title} </p>
                <p>Abstract: {abstract}</p>
                <p>Lien: {link}</p>
            </div>

        </div>

        <div className="Review">
            <InputExemple info="Nombre d'avis"></InputExemple>
            <p>Rigueur</p>
            <Rating disabled icon='star' defaultRating={2} maxRating={5} />
            <p>Analyse</p>
            <Rating disabled icon='star' defaultRating={3} maxRating={5} />
            <p>Résultats</p>
            <Rating disabled icon='star' defaultRating={4} maxRating={5} />
            <p>Interprétation</p>
            <Rating disabled icon='star' defaultRating={3} maxRating={5} />
            
        </div>
        
    </div>
)

ArticleReviewed.PropTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired
}

export default ArticleReviewed