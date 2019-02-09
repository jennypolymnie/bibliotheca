import React from 'react'
import { Button, Form, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import isMainColumn from '../../styleWrappers/isMainColumn';

const Login = () => (
      <div className="login">
        <Header as='h2' color='blue' textAlign='center'>
           Connectez vous à votre compte
        </Header>
        <Form size='large'>
          <Segment raised>
            <Form.Input 
              fluid 
              icon='user' 
              iconPosition='left' 
              placeholder='Nom du laboratoire' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='blue' fluid size='large' as={ Link } to = '/logo'>
              Connexion
            </Button>
          </Segment>
        </Form>

        <Message>
          Vous n'avez pas encore de compte <a href='/profilType'>Créer votre profil</a>
        </Message>
      </div>
);

export default isMainColumn(Login)