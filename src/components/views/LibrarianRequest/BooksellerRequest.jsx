import React from 'react';
import {
    Button, Form, TextArea, Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StandardLayout from '../../Layouts/StandardLayout';
import './BooksellerRequest.less';


const BooksellerRequest = () => (

    <Grid container>
        <Grid.Row>
            <Form className="wide-grid">
                <Form.Field
                    required
                    control={TextArea}
                    label="Comment puis je vous aider?"
                    placeholder="Posez votre question ou faite lui part de vos commentaires"
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

export default StandardLayout(BooksellerRequest, 'Communiquer avec la bibliothécaire');
