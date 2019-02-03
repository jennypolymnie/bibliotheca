
import React, { Component } from 'react';
import './stylesheets/SearchResults.css';
import CountElement from './NbArticle';
import Article from './Article';
import InputExemple from './InputExemple';
import MenuSuperieur from './MenuSuperieur';
import BdArticles from './BdArticles';


class SearchResults extends Component {

  render() {
    
    return (
        
      <div className="recherche">
          <MenuSuperieur></MenuSuperieur>
        
          <h2>Résultat de la recherche</h2>

        <div className = "requete">
        <InputExemple info ="Nature" entry ="sang" ></InputExemple>
        <InputExemple info ="Niveau de hiérarchie" entry ="source" ></InputExemple>
        <InputExemple info ="Support" entry ="pierre" ></InputExemple>
        <InputExemple info ="Transfert" entry ="primaire" ></InputExemple>
        </div>

        <div className = "resultat">
        <CountElement name = "Nombre d'articles correspondant à votre recherche" count = {4} />
        {BdArticles.map(({authors, title, id}) => (
          <Article key={id} author = {authors} title = {title} onClick={this.handleCardClick}/>
        ))
      }
        </div>
        
      </div>
    );
  }
}

export default SearchResults;