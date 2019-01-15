import React, { Component } from 'react';
import {Button, Form, Checkbox, Radio, TextArea, Input, Message, FormField, Label} from 'semantic-ui-react';
import MenuSuperieur from '../search-results/MenuSuperieur';
import { Header } from 'semantic-ui-react';
import './LibraryRequest.css';
import DropdownQuestion from './DropdownQuestion';


class LibraryRequest extends Component {
  
    state = {}
    statehierarchy = {}
    handleChange = (e, { value }) => this.setState({ value })
    handleChangeHierarchy = (e, { value }) => this.setStatehierarchy({ value })
    render() {
  
      return (
          
        <div className="LibraryRequest">
          
          <MenuSuperieur></MenuSuperieur>
     
          <div className ="Message">
            <Message color='blue'
            attached
            header='Bienvenue dans notre application LSJML!'
            content="Quel type d'article recherchez vous?"
            />
            </div>
   

            <div className = "ProfilIncluded">
          <Form>
          <Form.Field > <Checkbox toggle label="Souhaitez vous utilisez le profil de votre laboratoire pour cette recherche?"/> </Form.Field>
          <Form.Field> 
                <DropdownQuestion  
                  a="Support de la trace" 
                  b="Pierre"
                  c="Vêtement" 
                  d="Volant"
                  e="Outil" 
                  f="Peau de la victime"> 
                </DropdownQuestion>
            </Form.Field>
            <Form.Field> 
                <DropdownQuestion  
                  a="Nature de la trace" 
                  b="Sperme"
                  c="Sécrétions vaginales" 
                  d="Urine"
                  e="Cellules épithéliales" 
                  f="Indéterminé"> 
                </DropdownQuestion>
            </Form.Field>
          </Form>

        <Form>  
        <Form.Field>
          <Label> Pays identique au votre? </Label>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Primaire'
            name='radioGroup'
            value='primaire'
            checked={this.state.value === 'primaire'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Secondaire'
            name='radioGroup'
            value='secondaire'
            checked={this.state.value === 'secondaire'}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field>
          <Radio
            label='Tertiaire'
            name='radioGroup'
            value='tertiaire'
            checked={this.state.value === 'tertiaire'}
            onChange={this.handleChange}
          />
        </Form.Field>
        </Form>

        <Form>
        <Form.Field>
          <Radio
            label='Sous source'
            name='hierarchyGroup'
            value='soussource'
            checked={this.statehierarchy.value === 'soussource'}
            onChange={this.handleChangeHierarchy}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Source'
            name='hierarchyGroup'
            value='Source'
            checked={this.statehierarchy.value === 'source'}
            onChange={this.handleChangeHierarchy}
          />
        </Form.Field>

        <Form.Field>
          <Radio
            label='Activité'
            name='hierarchyGroup'
            value='activite'
            checked={this.statehierarchy.value === 'activite'}
            onChange={this.handleChangeHierarchy}
          />
        </Form.Field>

        <Form.Field>
          <Radio
            label='Délit'
            name='hierarchyGroup'
            value='delit'
            checked={this.statehierarchy.value === 'delit'}
            onChange={this.handleChangeHierarchy}
          />
        </Form.Field>

      </Form>

        </div>
        </div>

      );
    }
  }
  
  export default LibraryRequest;