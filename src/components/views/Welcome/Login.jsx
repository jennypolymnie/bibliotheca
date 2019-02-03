import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Login = () => (
  <div className='login-form'>
    <Grid textAlign='center'>
      <Grid.Column style={{ maxWidth: 450 }}>
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
            <Button color='blue' fluid size='large' as={ Link } to = '/board'>
              Connexion
            </Button>
          </Segment>
        </Form>

        <Message>
          Vous n'avez pas encore de compte <a href='/formLab'>Créer votre profil</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default Login