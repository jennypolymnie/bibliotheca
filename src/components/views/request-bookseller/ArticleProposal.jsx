import React, { Component } from 'react';
import {Button, Form, TextArea, Input, Message} from 'semantic-ui-react';
//import MenuSuperieur from './search-results/MenuSuperieur';
import { Header } from 'semantic-ui-react';


class ArticleProposal extends Component {
  
    render() {
  
      return (
          
        <div className="Recherche">

            <Header as='h2'> <p>Proposer un article à la bibliothécaire</p></Header>

            <div>
             <Message color='blue'
              attached
              header='LSJML!'
              content="Je vous remercie d'avance pour votre contribution à Bibliothéca"
              />
          </div>

            <Form>
              <Form.Group grouped>
                <Form.Field 
                required 
                control={Input} 
                label='Email du demandeur' 
                placeholder='insérez votre e-mail'/>
                <Form.Field 
                required 
                control={Input} 
                label= "Titre de l'article ou du document que vous souhaitez transmettre" 
                placeholder= "Merci de me donner le titre de l'article"/>
                <Form.Field 
                required
                control={TextArea} 
                label='Pourquoi jugez vous cet article intéressant?' 
                placeholder="Pas besoin d'écrire une critique, juste quelques lignes" 
                style={{ minHeight: 200 }}
                />
                 <Form.Field 
                control={Button} >Télécharger votre document
                </Form.Field>
                <Form.Field 
                control={Button} >Envoyez la proposition
                </Form.Field>

              </Form.Group>
            </Form> 
   
        </div>
      );
    }
  }
  
  export default ArticleProposal;