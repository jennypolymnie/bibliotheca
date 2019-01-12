import React, { Component } from 'react'
import { Button, Form, Message} from 'semantic-ui-react'
import './FormLab.css';
import './Board.css';
//import logo from './logo.svg'
//import { Image } from 'semantic-ui-react'



class Board extends Component {

  
    render() {
  
      return (
        <div className = "Board">
            <div>
            <image src = './logo.svg'/>
            </div>

            <div className ="Message">
            <Message color='blue'
            attached
            header='Bienvenue sur notre site!'
            content='Comment puis je vous aider aujourd hui?'
            />
            </div>

            <div className ="InfoRecherche">
          <div className= "InfoRecherche1">
            <Form>
              <Form.Group grouped>
                <Form.Field 
                label= "Le laboratoire est uniquement un laboratoire d'expertise "
                control='input' 
                type='checkbox' />
                <Form.Field 
                label='Détermination de la nature du fluide biologique' 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label='ADN ancien' 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label='Méthylation' 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label='Interprétation des mélanges' 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label='Chromosome Y' 
                control='input' 
                type='checkbox' />
              </Form.Group>
            </Form>
            </div>

            <div className= "InfoRecherche2">
            <Form>
              <Form.Group grouped>
                <Form.Field 
                label='Chromosome X' 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label="Logiciel d'interprétation" 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label="Détection de l'ADN de contact" 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label='Détermination des caractéristiques physiques' 
                control='input' 
                type='checkbox' />
                <Form.Field 
                label='ADN mitochondrial' 
                control='input' 
                type='checkbox' />
              </Form.Group>
            </Form>
            </div>






            <div classeName = "Tableau">

                <p>j'essaye pourtant</p>
               

                <div className = "Bibliotheca">
                    <Form>
                    <Form.Group grouped>
                    <label> Informations de contact </label>
                        <Form.Field control={Button}>Rechercher un article</Form.Field>
                        <Form.Field control={Button}>Proposer un article</Form.Field>
                        <Form.Field control={Button}>Donner son avis</Form.Field>
                        <Form.Field control={Button}>Poser une question à la bibliothécaire</Form.Field>
                    </Form.Group>
                    </Form> 
                </div>


                <div className = "Partenariat">
                    <Form>
                    <Form.Group grouped>
                    <label> Informations de contact </label>
                        <Form.Field control={Button}>Entrer dans le forum</Form.Field>
                        <Form.Field control={Button}>Rechercher un partenaire pour une étude</Form.Field>
                        <Form.Field control={Button}>Demander conseil pour une technologie</Form.Field>
                    </Form.Group>
                    </Form> 
                </div>
            </div>
            </div>
            </div>

);
}
}

export default Board