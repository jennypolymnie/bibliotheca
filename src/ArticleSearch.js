import React, { Component } from 'react';
import {Button, Form, Input} from 'semantic-ui-react'
import InputExemple from './Input'
import HeaderGreetings from './Header'
import MenuSuperieur from './MenuSuperieur'

class ArticleSearch extends Component {
  
    render() {
  
      return (
          
        <div className="recherche">
            <MenuSuperieur></MenuSuperieur>
          
            <HeaderGreetings />
            <label>Entrez le titre de </label>
            <Input icon='search' placeholder='Search...' />
   
        </div>
      );
    }
  }
  
  export default ArticleSearch;
  