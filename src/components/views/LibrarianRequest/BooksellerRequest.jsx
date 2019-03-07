import React from 'react';
import {
    Button, Form, TextArea, Header, Grid
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
                <Form.Field
                    required
                    control={TextArea}
                    label="Comment puis je vous aider?"
                    placeholder="Posez votre question"
                    style={{ minHeight: 200 }}
                />
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
