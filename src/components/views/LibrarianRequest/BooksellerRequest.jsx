import React from 'react';
import {
    Button, Form, TextArea, Input, Header, Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ArticleProposal.css';


const BooksellerRequest = () => (

    <Grid container>
        <Grid.Row>
            <Header as="h1">Question à la bibliothécaire</Header>
        </Grid.Row>

        <Grid.Row>
            <Form className="to-librarian">
                <Form.Group grouped>
                    <Form.Field
                        required
                        control={Input}
                        label="Email du demandeur"
                        placeholder="Votre e-mail"
                    />
                    <Form.Field
                        required
                        control={TextArea}
                        label="Que souhaitez-vous demander à la bibliothécaire?"
                        placeholder="Posez votre question"
                        style={{ minHeight: 200 }}
                    />
                </Form.Group>
            </Form>
        </Grid.Row>

        <Grid.Row>

            <Button
                color="blue"
                size="large"
                as={Link}
                to="/requestSend"
            >
                Envoyez la demande
            </Button>
        </Grid.Row>
    </Grid>
);

export default BooksellerRequest;
