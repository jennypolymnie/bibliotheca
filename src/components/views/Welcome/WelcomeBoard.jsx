import React from 'react'
import { Grid, Header, Message, Segment, Icon, Menu } from 'semantic-ui-react'


const WelcomeBoard = () => (
  <div className='Welcome-Board'>
    
    <Grid textAlign='center' style={{ height: 500 }}>
      <Grid.Column style={{ maxWidth: 700 }}>
        <Header as='h2' color='blue' textAlign='center'>
           Bienvenue dans Bibliothéca
        </Header>
        <Menu fluid vertical>
          <Segment stacked>
            <Menu.Item> 
            <p>Cette bibliothèque est destinée aux laboratoires de génétique forensique
                aux instances judiciaires et aux étudiants intéressés à l'utilité de l'ADN
                dans les investigations criminelles.
            </p>
            </Menu.Item>
          </Segment>
        </Menu>

        <Message>
        <p>Voici une présentation de notre bibliothéque</p>
        <Icon name='video play' size='huge'/>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default WelcomeBoard