import React, { Component } from 'react';
import { Button, Form,Icon, Message, Radio} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import MenuSuperieur from '../search-results/MenuSuperieur';
import './PartnerStudy.css'
import RequestingLabInfo from './RequestingLabInfo';


class PartnerStudy extends Component {
  
    state = {}
    handlePays = (e, { value }) => this.setState({
      pays: value
    })
    handleProject = (e, { value }) => this.setState({ 
      project: value 
    })

  render() {
  

    return (
      <div className = "PartnerStudy">

        <div>
            <MenuSuperieur></MenuSuperieur>
        </div>


        <div>
            <Message color='blue'
              attached
              header="Partenaire d'étude"
              content='Remplissez ce formulaire si vous souhaitez trouver un partenaire pour des projets de développement, de validation ou de recherche. La bibliothécaire va ensuite vous mettre en relation avec un ou des laboratoires potentiels'
              />
        </div>


        <div className = "LabInfoRequest">
         <RequestingLabInfo 
         a='Titre de votre projet' 
         b='Titre'
         c='Email de la personne de contact pour ce projet'
         d='adresse e-mail' >
         </RequestingLabInfo>
        </div>


        <div className="LabCountry">
          <Form>  
            <Form.Field label="Même pays que le votre?"/>
            <Form.Field>
              <Radio
                label='Oui'
                name='radioGroup'
                value='oui'
                checked={this.state.pays === 'oui'}
                onChange={this.handlePays}
              />
            </Form.Field>
            <Form.Field>
              <Radio
              label='Non'
              name='radioGroup'
              value='non'
              checked={this.state.pays === 'non'}
              onChange={this.handlePays}
              />
            </Form.Field>
            <Form.Field>
              <Radio
              label='Sans importance'
              name='radioGroup'
              value='sansimportance'
              checked={this.state.pays === 'sansimportance'}
              onChange={this.handlePays}
              />
            </Form.Field>
          </Form>
        </div>


        <div className = "ResearchTitle">
          <h1>Thème(s) de recherche</h1>
          <Button basic circular color = 'green' icon as= { Link } to = '/articles'>
              <Icon size='large' name='question circle' />
          </Button>
        </div>


        <div className ="ResearchRequest">
          <div className= "ResearchRequest1">
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

          <div className= "ResearchRequest2">
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


          <div className= "ResearchRequest3">
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

        <div className="Project">
          <Form>  
            <Form.Field label="Il s'agit d'un projet de:"/>
            <Form.Field>
              <Radio
              label='Développement'
              name='ProjetGroup'
              value='developpement'
              checked={this.state.project === 'developpement'}
              onChange={this.handleProject}
              />
            </Form.Field>
            <Form.Field>
              <Radio
              label='Validation'
              name='ProjetGroup'
              value='validation'
              checked={this.state.project === 'validation'}
              onChange={this.handleProject}
              />
            </Form.Field>
            <Form.Field>
              <Radio
              label='Recherche'
              name='ProjetGroup'
              value='recherche'
              checked={this.state.project === 'recherche'}
              onChange={this.handleProject}
              />
            </Form.Field>
          </Form>
        </div>

        <div className="Button">
            <Button 
            as= { Link } to = '/List'
            color = 'blue' 
            size='large'>
            Lancer la requête
            </Button>
        </div>
    </div>

   
    );
  }
}

export default PartnerStudy;