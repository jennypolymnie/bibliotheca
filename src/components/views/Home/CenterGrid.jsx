import React from 'react';
import {
    Image, Grid, Menu, Segment, Header
} from 'semantic-ui-react';
import LocalizedStrings from 'react-localization';
import Login from './Login';
import Statistics from './Statistics';

const translations = new LocalizedStrings({
    en: {
        search: 'Search the library',
        propose: 'Proposer un article',
        evaluate: 'Evaluer un article',
        ask: 'Poser une question',
        forum: 'Entrer dans le forum',
        partner: 'Rechercher un partenaire',
        help: 'Demander conseil'
    },
    fr: {
        search: 'Interroger la bibliothèque',
        propose: 'Proposer un article',
        evaluate: 'Evaluer un article',
        ask: 'Poser une question',
        forum: 'Entrer dans le forum',
        partner: 'Rechercher un partenaire',
        help: 'Demander conseil'

    }
});

const withCenterGrid = (C, showMenu) => props => (
    <div className="vertical-center">
        <Grid container stretched padded="vertically">
            <Grid.Row verticalAlign="middle" centered className="titleRow">
                <Header as="div" className="title" color="blue">
                    {'BIBLIOTHECA'}
                </Header>
            </Grid.Row>
            <Grid.Row verticalAlign="middle" container className="mainRow">
                <Grid.Column verticalAlign="middle" textAlign="left" width={5}>
                    { showMenu && (
                        <Menu text vertical size="massive" className="fixed-center fixed-left-text">
                            <Menu.Item content={translations.search} as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content={translations.propose} as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content={translations.evaluate} as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content={translations.ask} as={Segment} basic size="huge" compact active={false} />
                        </Menu>
                    )}
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="center" width={6} stretched className="centerContent">
                    <C {...props} />
                </Grid.Column>
                <Grid.Column verticalAlign="middle" textAlign="right" width={5}>
                    { showMenu && (
                        <Menu text vertical size="massive" className="fixed-center fixed-right-text">
                            <Menu.Item content={translations.forum} as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content={translations.partner} as={Segment} basic size="huge" compact active={false} />
                            <Menu.Item content={translations.help} as={Segment} basic size="huge" compact active={false} />
                        </Menu>
                    )}
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered verticalAlign="bottom">
                <Segment padded="very" basic className="mainStatistics">
                    <Statistics />
                </Segment>
            </Grid.Row>
        </Grid>
    </div>

);

export const LoginWithCenterGrid = withCenterGrid(Login, false);
export const LogoWithCenterGrid = withCenterGrid(Image, true);
