import React, { Component } from 'react';
import {
    Button, Form, TextArea, Input, Header, Grid, Message
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StandardLayout from '../../layout/StandardLayout';

class ArticleProposal extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state;
        return (

            <Grid container>
                <Grid.Row>
                    <Form className="to-librarian">
                        <Form.Group widths="equal" grouped>

                            <Form.Field
                                required
                                control={Input}
                                label="Titre du document"
                                placeholder=""
                            />
                            <Form.Field
                                required
                                control={Input}
                                label="Type de document"
                                placeholder="Article, thèse, rapport de recherche, guidelines..."
                            />
                            <Form.Field
                                required
                                control={Input}
                                label="Auteur(s)"
                                placeholder=""
                            />
                            <Form.Field
                                control={Input}
                                label="Lien public"
                                placeholder="adresse html"
                            />
                        </Form.Group>

                        <Form.Group grouped>
                            <Message>
                                {'Détenez vous les droits d\'auteur de ce document?'}
                            </Message>
                            <Form.Radio
                                label="Oui et je consens à la distribution libre sur bibliotheca"
                                value="yes"
                                checked={value === 'yes'}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label="Non"
                                value="no"
                                checked={value === 'no'}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label="Pourquoi jugez-vous cet article ou ce document intéressant?"
                            placeholder="Pas besoin d'écrire une critique, juste quelques lignes"
                            style={{ minHeight: 200 }}
                        />
                    </Form>
                </Grid.Row>
                <Grid.Row>
                    <Button color="blue">
                        Joindre votre document
                    </Button>
                    <Button
                        color="blue"
                        as={Link}
                        to="/proposalSend"
                    >
                        Envoyez
                    </Button>
                </Grid.Row>
            </Grid>
        );
    }
}

export default StandardLayout(ArticleProposal, 'Proposer un document');
