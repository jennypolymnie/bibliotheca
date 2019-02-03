import React, { Component } from 'react';
import {Button, Form, TextArea, Input, Message} from 'semantic-ui-react';
import MenuSuperieur from '../search-results/MenuSuperieur';
import './ArticleProposal.css';
import { Link } from 'react-router-dom';


class ArticleProposal extends Component {
  
    render() {
  
      return (
          
        <div className="ArticleProposal">
             <MenuSuperieur></MenuSuperieur>

            <div>
             <Message color='blue'
              attached
              header='Proposer un article à la bibliothécaire'
              content="Merci d'avance pour votre contribution à Bibliothéca"
              />
            </div>

            <div className="Formulaire">
            <Form>
              <Form.Group grouped>
                <Form.Field 
                required 
                control={Input} 
                label='Email du demandeur' 
                placeholder='Votre e-mail'/>
                <Form.Field 
                required 
                control={Input} 
                label= "Titre de l'article ou du document que vous souhaitez transmettre" 
                placeholder= "Titre"/>
                <Form.Field 
                required
                control={TextArea} 
                label='Pourquoi jugez-vous cet article ou ce document intéressant?' 
                placeholder="Pas besoin d'écrire une critique, juste quelques lignes" 
                style={{ minHeight: 200 }}
                />
              </Form.Group>
            </Form> 

            <div>
            <Button color='blue'>
            Joindre votre document
            </Button>

            <Button 
            color='blue'
            as = { Link } to = '/proposalSend'
            >
            Envoyez la proposition
            </Button>
            </div>
            </div>
        </div>
      );
    }
  }
  
  export default ArticleProposal;