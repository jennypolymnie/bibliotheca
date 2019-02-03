import PropTypes from 'prop-types'
import React from 'react';
import { Form } from 'semantic-ui-react';


const Research = () => (

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

)
export default Research