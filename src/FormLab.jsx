import React, { Component } from 'react';
import { Button, Checkbox, Form, Input,Icon, Message} from 'semantic-ui-react';
import './FormLab.css';
import CheckboxToggle from './Toggle';
import GridForm from './GridForm';


class FormLab extends Component {
  
  //state = {}
  //handleChange = (e, { value }) => this.setState({ value })

  render() {
    //const { value } = this.state

    return (
      <div className = "ProfilLab">

          <div>
             <Message color='blue'
              attached
              header='Bienvenue dans notre application!'
              content='Merci de bien vouloir remplir le formulaire ci dessous'
              />
          </div>

          <div className = "InfoLab">
             <h1>Labo</h1>
             <Form>
              <Form.Group grouped widths='equal'>
                <Form.Field 
                required 
                control={Input} 
                label='Nom du laboratoire' 
                placeholder='Nom du laboratoire' />
                <Form.Field 
                required
                control={Input}
                label='Pays'
                placeholder='Pays' />
                <Form.Field 
                control={Input}
                label='Site web' 
                placeholder='Site web' />
              </Form.Group>
            </Form>
          </div>

          <div className = "InfoContact">
            <Form>
              <Form.Group grouped>
              <label> <h1>Contact</h1> </label>
                <Form.Field 
                control={Input} 
                label='Email du contact technique' 
                placeholder='email technique' 
                type='email'/>
                <Form.Field 
                control={Input} 
                label='Email du contact interprétation' 
                placeholder='email interpretation' 
                type='email' />
              </Form.Group>
            </Form> 
          </div>


          <div className = "Titre">
          <h1>Axes de recherche</h1>
          <Button basic circular color = 'green' icon>
                <Icon size='large' name='question circle' />
                </Button>
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


            <div className= "InfoRecherche3">
            <Form>
              <Form.Group grouped>
                <Form.Field 
                label='Ajouter un thème' 
                control='input' 
                type='input' />
              </Form.Group>
            </Form>
            </div>

          </div>

        
          <div classeName = "Partie2">
          <h1> Partie Analytique </h1>
          <GridForm/>
          </div>
    
          <div className = "Confidentialite">
          <Form>
          <Form.Field > <Checkbox toggle label="Souhaitez vous que ces informations soient visibles pour les autres laboratoires?"/> </Form.Field>
          </Form>
          </div>

          <div className = "Acceptation">
            <h1>Inscription</h1>
            <Form>
              <Form.Group inline>
                <Form.Field 
                required 
                control={Checkbox} 
                label='Je suis accord avec les conditions de la plateforme' />
                <Form.Field control={Button}>Je poursuis avec le paiement</Form.Field>
                <Form.Field control={Button}>Finalement je ne veux pas m'inscrire</Form.Field>
              </Form.Group>
            </Form> 
          </div>





    </div>

   
    );
  }
}

export default FormLab