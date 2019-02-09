import React, { Component } from 'react';
import {
    Button, Radio, Form, Input
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GridForm from '../formlab/GridForm';
import './RequestEquipment.css';


class RequestEquipment extends Component {
    state = {}

    handleQuestion = (e, { value }) => this.setState({
        question: value
    })

    render() {
        return (

            <div className="RequestEquipment">
                <div>
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
                </div>
                <div className="Sélection">
                    <GridForm />
                </div>
                <div className="QuestionType">
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
                    <div className="ButtonRequestEquipment">
                        <Button
                            as={Link}
                            to="/List"
                            color="blue"
                            size="large"
                        >
                            {'Lancer la requête'}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestEquipment;
