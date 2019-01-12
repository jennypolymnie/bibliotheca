import React, { Component } from 'react';
import {Button, Form, TextArea, Input} from 'semantic-ui-react';
import MenuSuperieur from '../search-results/MenuSuperieur';
import { Header} from 'semantic-ui-react';


class BooksellerRequest extends Component {
  
    render() {
  
      return (
          
        <div className="Recherche">
          
          <MenuSuperieur />
          <Header as='h2'> <p>Poser une question à la bibliothécaire</p></Header>
          
          <Form>
            <Form.Group grouped>
              <Form.Field 
              required 
              control={Input} 
              label='Email du demandeur' 
              placeholder='insérez votre e-mail'/>
              <Form.Field 
              required
              control={TextArea} 
              label='Que souhaitez-vous demander à la bibliothécaire?' 
              placeholder='Posez votre question' 
              style={{ minHeight: 200 }}
              />
              <Form.Field 
              control={Button} >Envoyez la demande
              </Form.Field>

            </Form.Group>
          </Form> 
   
        </div>
      );
    }
  }
  
  export default BooksellerRequest;