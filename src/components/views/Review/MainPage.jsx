import React, { Component } from 'react';
import {
    Button, Form, Input, Header, Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './MainPage.css';

class MainPage extends Component {
    state = {}

    render() {
        return (

            <Grid container>
                <Grid.Row>
                    <Header as="h1">Rechercher un article ou donner son opinion</Header>
                </Grid.Row>
                <Grid.Row>
                    <Form className="format">
                        <Form.Group widths="equal" grouped>

                            <Form.Field
                                control={Input}
                                label="Titre"
                                placeholder="Titre"
                            />
                            <Form.Field
                                control={Input}
                                label="Auteurs"
                                placeholder="Auteurs"
                            />
                            <Form.Field
                                control={Input}
                                label="Mots-clé"
                                placeholder="Mots-clé"
                            />
                            <Form.Field
                                control={Input}
                                label="Journal"
                                placeholder="Journal"
                            />

                            <Form.Field
                                control={Input}
                                label="Année"
                                placeholder="Année"
                            />
                        </Form.Group>

                    </Form>
                </Grid.Row>
                <Grid.Row>
                    <Button
                        color="blue"
                        as={Link}
                        to="/proposalSend"
                    >
                        Rechercher
                    </Button>
                    <Button
                        color="blue"
                        as={Link}
                        to="/reviewForm"
                    >
                        Donner votre opinion
                    </Button>
                </Grid.Row>
            </Grid>
        );
    }
}

export default MainPage;
