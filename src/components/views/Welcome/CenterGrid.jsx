import React from 'react';
import {
    Image, Grid, Menu, Segment
} from 'semantic-ui-react';
import Login from './Login';

const withCenterGrid = C => props => (
    <div className="vertical-center">
        <Grid container>
            <Grid.Row verticalAlign="middle">
                <Grid.Column verticalAlign="middle" textAlign="left" width={5}>
                    <div className="vertical-center">
                        <Menu text vertical textAlign="left" size="massive" className="fixed-center fixed-left-text">
                            <Menu.Item name="Interroger la bibliothèque" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item name="Proposer un article" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item name="Evaluer un article" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item name="Poser une question" as={Segment} basic size="huge" compact active={false} />
                        </Menu>
                    </div>
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="center" width={6}>
                    <div className="vertical-center">
                        <C {...props} />
                    </div>
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="right" width={5}>
                    <div className="vertical-center">
                        <Menu text vertical textAlign="right" size="massive" className="fixed-center fixed-right-text">
                            <Menu.Item name="Entrer dans le forum" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item name="Rechercher un partenaire" as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item name="Demander conseil" as={Segment} basic size="huge" compact active={false} />
                        </Menu>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>

);

export const LoginWithCenterGrid = withCenterGrid(Login);
export const LogoWithCenterGrid = withCenterGrid(Image);
