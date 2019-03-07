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
                    {'BFOR'}
                </Header>
            </Grid.Row>
            <Grid.Row verticalAlign="middle" container>
                <Grid.Column verticalAlign="middle" textAlign="left" width={5}>
                    <Menu text vertical size="massive" className="fixed-center fixed-left-text">
                        <Menu.Item content="Interroger la bibliothèque" as={Segment} basic size="huge" compact active={false} />
                        <Menu.Item content="Proposer un article" as={Segment} basic size="huge" compact active={false} />
                        <Menu.Item content="Evaluer un article" as={Segment} basic size="huge" compact active={false} />
                        <Menu.Item content="Poser une question" as={Segment} basic size="huge" compact active={false} />
                    </Menu>
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="center" width={6} streched>
                    <C {...props} />
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="right" width={5}>
                    <Menu text vertical size="massive" className="fixed-center fixed-right-text">
                        <Menu.Item content="Entrer dans le forum" as={Segment} basic size="huge" compact active={false} />
                        <Menu.Item content="Rechercher un partenaire" as={Segment} basic size="huge" compact active={false} />
                        <Menu.Item content="Demander conseil" as={Segment} basic size="huge" compact active={false} />
                    </Menu>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered verticalAlign="bottom">
                <Segment padded="very" basic>
                    <Statistics />
                </Segment>
            </Grid.Row>
        </Grid>
    </div>

);

export const LoginWithCenterGrid = withCenterGrid(Login);
export const LogoWithCenterGrid = withCenterGrid(Image);
