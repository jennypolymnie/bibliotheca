import React, { Component } from 'react';
//import LogoutIcon from './LogoutIcon.png';
import './App.css';
import CountElement from './NbArticleFound'
import Article from './Article'
import HeaderGreetings from './Header'
import InputExemple from './Input'
import MenuExampleSecondary from './Menu'


class App extends Component {

  handleCardClick(Article) {
    console.log(Article, 'a agrandir dans une nouvelle fenêtre')
  }

  render() {

    return (
        
      <div className="recherche">
          <MenuExampleSecondary></MenuExampleSecondary>
        
          <HeaderGreetings />

        <div className = "requete">
        <InputExemple Info ="nature" Entree ="sang" ></InputExemple>
        <InputExemple Info ="Niveau de hiérarchie" Entree ="source" ></InputExemple>
        <InputExemple Info ="Support" Entree ="pierre" ></InputExemple>
        <InputExemple Info ="Transfert" Entree ="primaire" ></InputExemple>
        </div>

        <div className = "resultat">
        <CountElement Name = "Nombre d'articles correspondant à votre recherche" Count = {4} />
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
