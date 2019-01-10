import React, { Component } from 'react'
import { Button, Checkbox, Form, Input,TextArea, Message} from 'semantic-ui-react'
import './FormLab.css';
import CheckboxToggle from './Toggle'

const extraction = [
    { key: 'Q', text: 'Qiamp', value: 'qiamp' },
    { key: 'I', text: 'Investigator', value: 'investigator' },
  ]

  const amplification = [
    { key: 'N', text: 'NGMSelect', value: 'ngmselect' },
    { key: 'F', text: 'Fusion6C', value: 'fusion6c' },
  ]

class FormLab extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <div className = "ProfilLab">

          <div>
             <Message color='blue'
              attached
              header='Bienvenue sur notre site!'
              content='Merci de bien vouloir remplir le formulaire ci dessous'
              />
             <Form className = "InfoLab">
              <Form.Group grouped widths='equal'>
                <Form.Field required control={Input} label='Nom du laboratoire' placeholder='Nom du laboratoire' />
                <Form.Field required control={Input} label='Pays' placeholder='Pays' />
                <Form.Field control={Input} label='Site web' placeholder='Site web' />
              </Form.Group>
            </Form>
          </div>

          <div className ="InfoRecherche">
            <Form>
              <Form.Group grouped>
              <label>Vos axes de recherche</label>
                <Form.Field label='Mélanges complexes' control='input' type='checkbox' />
                <Form.Field label='Détermination de la nature de la trace' control='input' type='checkbox' />
                <Form.Field label='Détermination de la nature de la trace' control='input' type='checkbox' />
                <Form.Field label='Détermination de la nature de la trace' control='input' type='checkbox' />
                <Form.Field label='Détermination de la nature de la trace' control='input' type='checkbox' />
                <Form.Field label='Détermination de la nature de la trace' control='input' type='checkbox' />
              </Form.Group>
            </Form>
          </div>

          <div className = "InfoContact">
            <Form>
              <Form.Group grouped>
              <label> Informations de contact </label>
                <Form.Field control={Input} label='Email du contact technique' placeholder='email technique' />
                <Form.Field control={Input} label='Email du contact interprétation' placeholder='email interpretation' />
                <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
                <Form.Field required control={Checkbox} label='Je suis accord avec les conditions de la plateforme' />
                <Form.Field > <CheckboxToggle/> </Form.Field>
                <Form.Field control={Button}>Enregistrer mon profil</Form.Field>
              </Form.Group>
            </Form> 
          </div>


          <div classeName ="Choix">
              <Form>
              <Form.Field><CheckboxToggle/></Form.Field>
              </Form>
          </div>

        {//
          //<div classeName = "Partie2">
          //<GridForm/>
        //</div>
        }
    
   
    </div>

   
    );
  }
}

export default FormLab