import React, { Component } from 'react';
import { Button, Checkbox, Form, Input,Icon, Message, Radio} from 'semantic-ui-react';
import './FormLab.css';
import GridForm from './GridForm';
import {Link} from 'react-router-dom';

<div>
        <div className = "Acceptation">
        <h1>Inscription</h1>
        <Button basic circular size= 'large' color = 'green' icon as= { Link } to = '/articles'>
          <Icon size='large' name='question circle' />
        </Button>
      </div>

      <div>
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