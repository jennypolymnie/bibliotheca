import React, { Component } from 'react';
import MenuSuperiorWelcome from '../Welcome/MenuSuperiorWelcome';
import { Form, Label, Divider, Button} from 'semantic-ui-react';
import './Connexion.css';
import { Link } from 'react-router-dom';


class Connexion extends Component {

  render() {
    
    return (
        
      <div className="Connexion">

        <div className="Menu">
          <MenuSuperiorWelcome></MenuSuperiorWelcome>
          <h2>Connectez vous à votre compte</h2>
        </div>
        
        <div className = "Nom">
          <Form>
            <Form.Field inline>
              <Label pointing='right'>Entrez votre nom d'utilisateur</Label>
              <input type='text' placeholder="Nom d'utilisateur" />
            </Form.Field>
            
            <Divider />

            <Form.Field inline>
              <Label pointing='right'>Entrez votre mot de passe</Label>
              <input type='password' placeholder='Mot de passe' />
            </Form.Field>
            <Divider />
          </Form>
        </div>

        <div className = "Button">
          <Button size= 'large' color = 'blue' as= { Link } to = '/board'>
          Se connecter
          </Button>
        </div>
       
      </div>
    );
  }
}

export default Connexion;