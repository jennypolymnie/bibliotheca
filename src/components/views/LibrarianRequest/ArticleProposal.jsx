import React from 'react';
import {
    Button, Form, TextArea, Input, Header, Grid
} from 'semantic-ui-react';
import './ArticleProposal.css';
import { Link } from 'react-router-dom';


const ArticleProposal = () => (
    <Grid container>
        <Grid.Row>
            <Header as="h1">Proposer un document</Header>
        </Grid.Row>
        <Grid.Row>
            <Form className="to-librarian">
                <Form.Group widths='equal' grouped>
                    <Form.Field
                        required
                        control={Input}
                        label="Email du demandeur"
                        placeholder="Votre e-mail"
                    />
                    <Form.Field
                        required
                        control={Input}
                        label="Titre de l'article ou du document"
                        placeholder="Titre"
                    />
                    <Form.Field

                        control={TextArea}
                        label="Pourquoi jugez-vous cet article ou ce document intéressant?"
                        placeholder="Pas besoin d'écrire une critique, juste quelques lignes"
                        style={{ minHeight: 200 }}
                    />
                </Form.Group>
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

export default ArticleProposal;
