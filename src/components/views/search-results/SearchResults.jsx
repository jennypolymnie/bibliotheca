
import React, { Component } from 'react';
import './stylesheets/SearchResults.css';
import CountElement from './NbArticle';
import Article from './Article';
import InputExemple from './InputExemple';
import BdArticles from './BdArticles';
import { Input } from 'semantic-ui-react';
import { blue } from 'ansi-colors';


class SearchResults extends Component {
    render() {
        return (

            <div className="recherche">

                <h2>Résultat de la recherche</h2>

                <div className="requete">
                    <Input label="Nature supposée" placeholder="salive" />
                    <Input label="Support" placeholder="mouchoir" />
                    <Input label="Concentration" placeholder="<100pg/ul" />
                    <Input label="Test" placeholder="RSIDSaliva" />
                </div>

                <div className="resultat">
                    <CountElement name="Nombre d'articles correspondant à votre recherche" count={4} />
                    {BdArticles.map(({ authors, title, id, abstract, journal, link }) => (

                        <Article key={id} author={authors} title={title} journal={journal} abstract={abstract} link={link} onClick={this.handleCardClick} />

                    ))
                    }
                </div>

            </div>
        );
    }
}

export default SearchResults;
