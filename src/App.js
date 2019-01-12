import React, { Component } from 'react';
//import LogoutIcon from './LogoutIcon.png';
import './App.css';
import CountElement from './NbArticleFound'
import Article from './Article'
import HeaderGreetings from './Header'
import InputExemple from './InputExemple'
import MenuSuperieur from './MenuSuperieur'


class App extends Component {

  handleCardClick(Article) {
    console.log(Article, 'a agrandir dans une nouvelle fenêtre')
  }

  render() {

    return (
        
      <div className="recherche">
          <MenuSuperieur></MenuSuperieur>
        
          <HeaderGreetings />

        <div className = "requete">
        <InputExemple info ="nature" entree ="sang" ></InputExemple>
        <InputExemple info ="Niveau de hiérarchie" entree ="source" ></InputExemple>
        <InputExemple info ="Support" entree ="pierre" ></InputExemple>
        <InputExemple info ="Transfert" entree ="primaire" ></InputExemple>
        </div>

        <div className = "resultat">
        <CountElement name = "Nombre d'articles correspondant à votre recherche" count = {4} />
        <Article author = "J.Comte" title = "Nouveau Swab pour ADN de contact" onClick={this.handleCardClick}/>
        <Article author = "A.Sutcliffe" title = "Nouveau Swab pour ADN de contact" onClick={this.handleCardClick}/>
        <Article author = "J.Comte" title = "Nouveau Swab pour ADN de contact" onClick={this.handleCardClick}/>
        <Article author = "J.Comte" title = "Nouveau Swab pour ADN de contact" onClick={this.handleCardClick}/>
        </div>
        
      </div>
    );
  }
}

export default App;
