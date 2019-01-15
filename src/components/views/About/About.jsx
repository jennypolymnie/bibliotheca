import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import MenuSuperiorWelcome from '../search-results/MenuSuperieur';
import './About.css';
import { Message } from 'semantic-ui-react';


class About extends Component {

  render() {
    
    return (
        
      <div className="About">
        
        <Container className="Menu">
          <MenuSuperiorWelcome></MenuSuperiorWelcome>
        </Container>
        
        
        <div className ="Message">
              <Message 
                color='blue'
                attached
                header='A propos de la bibliothèque'
                content='Notre bibliothèque en quelques chiffres'
              />
        </div>

        <div className="Info">
          <Container>
            <p>Nombre de laboratoires lecteurs</p>
          </Container>
          <div className="Number">
            <p>24</p>
          </div>
        </div>
        
        <div className="Info">
          <Container>
            <p>Nombre d'articles datant de 2017 à aujourd'hui présent dans la bibliothèque</p>
          </Container>
          <div className="Number">
            <p>2000</p>
          </div>
        </div>

        <div className="Info">
          <Container>
            <p>Nombre de thèses présentes dans la bibliothèque</p>
          </Container>
          <div className="Number">
            <p>150</p>
          </div>
        </div>

        <div className="Info">
          <Container>
            <p>Nombre de journaux cités dans la bibliothèque</p>
          </Container>
          <div className="Number">
            <p>100</p>
          </div>
        </div>

        <div className="Info">
          <Container>
            <p>Conférences répertoriées dans la bibliothèque</p>
          </Container>
          <div className="Number">
            <p>20</p>
          </div>
        </div>

        <div className="Info">
          <Container>
            <p>La bibliothécaire</p>
          </Container>
        </div>
        
      </div>
    );
    
    }
}     
      export default About