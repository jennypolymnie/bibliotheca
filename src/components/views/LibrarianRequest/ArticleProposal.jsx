import React, { Component } from 'react';
import {
    Button, Form, TextArea, Input, Header, Grid
} from 'semantic-ui-react';
import './ArticleProposal.css';
import { Link } from 'react-router-dom';



class ArticleProposal extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state;
        return (

            <Grid container>
                <Grid.Row>
                    <Header as="h1">Proposer un document</Header>
                </Grid.Row>
                <Grid.Row>
                    <Form className="to-librarian">
                        <Form.Group widths="equal" grouped>

                            <Form.Field
                                required
                                control={Input}
                                label="Titre du document"
                                placeholder="Titre"
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
                            <label>
                                {'Détenez vous les droits d\'auteur de ce document?'}
                            </label>
                            <Form.Radio
                                label="Oui et je consens à la distribution libre sur bibliotheca"
                                value="yes"
                                checked={value === 'yes'}
                                onChange={this.handleChange}
                            />
                            <Form.Radio
                                label="Oui mais je refuse la distribution libre sur bibliotheca"
                                value="partial"
                                checked={value === 'partial'}
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

export default ArticleProposal;
