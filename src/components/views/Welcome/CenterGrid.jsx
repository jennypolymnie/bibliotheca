import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import Login from './Login';

const CenterGrid = () => (
    <Grid>
        <Grid.Row verticalAlign={"middle"} textAlign={"center"}>
            <Grid.Column verticalAlign={"middle"} textAlign={"left"} width={5}>
            <div className='vertical-center'>
                  <Menu fluid text vertical textAlign={"left"} size='massive'>
                      <Menu.Item name='Interroger la bibliothèque' active={false} />
                      <Menu.Item name='Proposer un article' active={false} />
                      <Menu.Item name='Evaluer un article' active={false} />
                      <Menu.Item name='Poser une question' active={false} />
                  </Menu>
                  </div>
            </Grid.Column>
            <Grid.Column verticalAlign={"middle"} textAlign={"center"} width={6}>
                <Login />
            </Grid.Column>
            <Grid.Column verticalAlign={"middle"} textAlign={"right"} width={5}>
            <div className='vertical-center'>
                  <Menu fluid text vertical textAlign={"right"} size='massive'>
                      <Menu.Item name='Entrer dans le forum' active={false} />
                      <Menu.Item name='Rechercher un partenaire' active={false} />
                      <Menu.Item name='Demander conseil' active={false} />
                  </Menu>
                  </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>

);

export default CenterGrid;