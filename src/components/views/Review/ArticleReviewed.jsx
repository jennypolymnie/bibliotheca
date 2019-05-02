import React from 'react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './ArticleReviewed.css';


const ArticleReviewed = ({
    author, title, abstract, link, onClick, journal
}) => (


    <div className="Article">
        <Segment>
            <div className="MainData" onClick={() => onClick(ArticleReviewed)}>
                <p>
                    <span className="emphasis">Authors: </span>
                    {author}
                </p>
                <p>
                    <span className="emphasis">Title: </span>
                    {title}
                    {' '}
                </p>
                <p>
                    <span className="emphasis">Journal: </span>
                    {journal}
                    {' '}
                </p>
                <p>
                    <span className="emphasis">Abstract: </span>
                    {abstract}
                </p>
                <p>
                    <span className="emphasis">Lien: </span>
                    {link}
                </p>
            </div>

            {/* <div className="Review">
                <InputExemple info="Nombre d'avis" />
                <p>Rigueur</p>
                <Rating disabled icon="star" defaultRating={2} maxRating={5} />
                <p>Analyse</p>
                <Rating disabled icon="star" defaultRating={3} maxRating={5} />
                <p>Résultats</p>
                <Rating disabled icon="star" defaultRating={4} maxRating={5} />
                <p>Interprétation</p>
                <Rating disabled icon="star" defaultRating={3} maxRating={5} />

            </div> */}
        </Segment>
    </div>
);

ArticleReviewed.PropTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired
};

ArticleReviewed.defaultProps = {
    author: '',
    title: '',
    abstract: '',
    link: ''
};


export default ArticleReviewed;
