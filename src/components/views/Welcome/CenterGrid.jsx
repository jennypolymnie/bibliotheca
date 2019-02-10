import React from 'react';
import {
    Image, Grid, Menu, Segment, Header
} from 'semantic-ui-react';
import Login from './Login';
import Statistics from './Statistics';

const withCenterGrid = C => props => (
    <div className="vertical-center">
        <Grid container stretched padded="vertically">
            <Grid.Row verticalAlign="middle" centered>
                <Header as="div" className="title" color="blue">
                    {'Bibliotheca'}
                </Header>
            </Grid.Row>
            <Grid.Row verticalAlign="middle" container>
                <Grid.Column verticalAlign="middle" textAlign="left" width={5}>
                    <div className="vertical-center">
                        <Menu text vertical textAlign="left" size="massive" className="fixed-center fixed-left-text">
                            <Menu.Item content="Interroger la bibliothèque" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content="Proposer un article" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content="Evaluer un article" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content="Poser une question" as={Segment} basic size="huge" compact active={false} />
                        </Menu>
                    </div>
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="center" width={6} streched>
                    <div className="vertical-center">
                        <C {...props} />
                    </div>
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="right" width={5}>
                    <div className="vertical-center">
                        <Menu text vertical textAlign="right" size="massive" className="fixed-center fixed-right-text">
                            <Menu.Item content="Entrer dans le forum" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content="Rechercher un partenaire" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content="Demander conseil" as={Segment} basic size="huge" compact active={false} />
                        </Menu>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered verticalAlign="bottom">
                <Segment basic>
                    <Statistics />
                </Segment>
            </Grid.Row>
        </Grid>
    </div>

);

export const LoginWithCenterGrid = withCenterGrid(Login);
export const LogoWithCenterGrid = withCenterGrid(Image);
