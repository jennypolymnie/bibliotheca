import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ButtonBoard.css';

const ButtonBoard = () => (

  <div className = "ButtonBoard">
    <Grid columns={2} divided textAlign='center'>
      <Grid.Row>
        <Grid.Column>
          <Label />
        </Grid.Column>
        <Grid.Column>
          <Label />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button 
          size ='big' 
          color = 'blue' 
          fluid 
          as= { Link } to = '/libraryRequest'>
          Interroger la bibliothèque</Button>
        </Grid.Column>
        <Grid.Column>
          <Button 
          size ='big' 
          color = 'blue' 
          fluid 
          as= { Link } to = '/articles'> 
          Entrer dans le forum</Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button  
          size ='big' 
          color = 'blue' 
          fluid 
          as= { Link } to = '/proposals'> 
          Proposer un article à la bibliothécaire </Button>
        </Grid.Column>
        <Grid.Column>
          <Button 
          size ='big' 
          color = 'blue' 
          fluid 
          as= { Link } to = '/PartnerStudy'> 
          Rechercher un partenaire pour une étude </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button 
          size ='big' 
          color = 'blue' 
          fluid 
          as= { Link } to = '/articles'> 
          Donner son avis sur les articles proposés</Button>
        </Grid.Column>
        <Grid.Column>
          <Button 
          size ='big' 
          color = 'blue' 
          fluid 
          as= { Link } to = '/articles'> 
          Demander conseil pour une technologie </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Button 
          size ='big' 
          color = 'blue' 
          fluid 
          as= { Link } to = '/booksellerRequest'> 
          Interroger la bibliothécaire </Button>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
      </Grid.Row>  
    </Grid>
  </div>
)


export default ButtonBoard