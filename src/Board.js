import React, { Component } from 'react'
import { Button, Form, Message} from 'semantic-ui-react'
import './FormLab.css';
import './Board.css';



class Board extends Component {

  
    render() {
  
      return (
        <div className = "Board">


            <div className ="Message">
          <Message color='blue'
            attached
            header='Bienvenue sur notre site!'
            content='Comment puis je vous aider aujourd hui?'
            />
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

);
}
}

export default Board