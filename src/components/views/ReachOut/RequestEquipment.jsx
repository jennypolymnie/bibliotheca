import React, { Component } from 'react';
import {
    Button, Radio, Form, Input, Header, Grid, Checkbox, Label
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GridForm from '../LabForm/GridForm';
import './RequestEquipment.css';


class RequestEquipment extends Component {
    state = {}

    handleQuestion = (e, { value }) => this.setState({
        question: value
    })

    render() {
        return (

            <div className="RequestEquipment">

                <Header as="h1">Demander conseil</Header>

                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Form>
                                <Form.Group grouped widths="equal">
                                    <Form.Field
                                        required
                                        control={Input}
                                        label="Poser votre question"
                                        placeholder="question"
                                    />
                                    <Form.Field
                                        required
                                        control={Input}
                                        label="Email de la personne à renseigner"
                                        placeholder="adresse e-mail"
                                    />
                                </Form.Group>
                            </Form>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column textAlign="center">
                            <Button.Group>
                                <Label color="blue" basic>chimie</Label>
                                <Checkbox toggle />
                                <Label color="blue" basic>Equipement</Label>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <h2>Chimie</h2>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <GridForm />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <p>
                                {'Quel est le type de votre question?'}
                            </p>
                            <Form className="QuestionRadio">
                                <Form.Field>
                                    <Radio
                                        label="Question technique"
                                        name="TypeQuestion"
                                        value="technique"
                                        checked={this.state.question === 'technique'}
                                        onChange={this.handleQuestion}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label="Question interprétation"
                                        name="TypeQuestion"
                                        value="interpretation"
                                        checked={this.state.question === 'interpretation'}
                                        onChange={this.handleQuestion}
                                    />
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>

                            <Button
                                as={Link}
                                to="/List"
                                color="blue"
                                size="large"
                            >
                                {'Lancer la requête'}
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default RequestEquipment;
