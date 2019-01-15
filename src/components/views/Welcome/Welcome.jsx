import React, { Component } from 'react';
import {Container,Icon} from 'semantic-ui-react';
import MenuSuperiorWelcome from './MenuSuperiorWelcome';
import './Welcome.css'


class Welcome extends Component {

  render() {
    
    return (
        
        <Container className="Welcome">
        
        <Container className="Menu">
          <MenuSuperiorWelcome></MenuSuperiorWelcome>
        </Container>
        
        <Container className="Title">
        <h2>Bienvenue dans Bibliothéca</h2>
         </Container>

        <Container className="Main">
        <div>
        <p>Cette bibliothèque est destinée aux laboratoires de génétique forensique, aux instances judiciaires et aux étudiants intéressés à l'utilité de l'ADN dans les investigations criminelles</p>
        </div>
        </Container>

        <Container className="Video" textAlign="center">
        <p>Voici une présentation de notre bibliothéque</p>
        <Icon name='play' size='huge'/>
        </Container>
        
        </Container>
    );
    
    }
}
      
      export default Welcome;