import React from 'react';
import {
    Button, Form, Grid, Segment, Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Essai from './Essai';


const Login = () => (
    <Segment>
        <Grid container>
            <Grid.Row container columns={1}>
                <Form className="login-form">

                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        placeholder="Nom du laboratoire"
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        placeholder="Password"
                        type="password"
                    />

                    <Button color="blue" fluid as={Link} to="/logo">
                        {'Connexion'}
                    </Button>
                </Form>
            </Grid.Row>

            <Grid.Row verticalAlign="middle" columns={2}>
                <Grid.Column>
                    <Button icon color="yellow" fluid as={Link} to="/profilType">
                        {'Créer votre profil '}
                        <Icon size="large" name="user" color="darkgrey" />
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Essai />
                </Grid.Column>
            </Grid.Row>

        </Grid>
    </Segment>
);

export default Login;
