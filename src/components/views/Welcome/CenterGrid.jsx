import React from 'react'
import { Grid, Menu, Label, Segment } from 'semantic-ui-react'
import Login from './Login';

const CenterGrid = () => (
    <Grid>
        <Grid.Row verticalAlign={"middle"}>
            <Grid.Column verticalAlign={"middle"} textAlign={"left"} width={5}>
            <div className='vertical-center'>
                  <Menu fluid text vertical textAlign={"left"} size='massive' className='fixed-center fixed-left-text'>
                      <Menu.Item name="Interroger la bibliothèque" as={Segment} basic size='huge' compact active={false}/>
                      <Menu.Item name='Proposer un article' as={Segment} basic size='huge' compact active={false} />
                      <Menu.Item name='Evaluer un article' as={Segment} basic size='huge' compact active={false} />
                      <Menu.Item name='Poser une question' as={Segment} basic size='huge' compact active={false} />
                  </Menu>
                  </div>
            </Grid.Column>
            <Grid.Column verticalAlign={"middle"} textAlign={"center"} width={6}>
                <Login />
            </Grid.Column>
            <Grid.Column verticalAlign={"middle"} textAlign={"right"} width={5}>
            <div className='vertical-center'>
                  <Menu fluid text vertical textAlign={"right"} size='massive' className='fixed-center fixed-right-text'>
                      <Menu.Item name='Entrer dans le forum' as={Segment} basic size='huge' compact active={false} />
                      <Menu.Item name='Rechercher un partenaire' as={Segment} basic size='huge' compact active={false} />
                      <Menu.Item name='Demander conseil' as={Segment} basic size='huge' compact active={false} />
                  </Menu>
                  </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>

);

export default CenterGrid;