import React, { Component } from 'react';
import {
    Button, Form, TextArea, Input, Header
} from 'semantic-ui-react';
import './BooksellerRequest.css';
import { Link } from 'react-router-dom';


class BooksellerRequest extends Component {
    render() {
        return (

            <div className="BooksellerRequest">

                <div>
                    <Header as="h1">Question à la bibliothécaire</Header>
                </div>

                <div className="RequestInfo">

                    <div>
                        <Form>
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
                    </div>

                    <div>
                        <Button
                            color="blue"
                            size="large"
                            as={Link}
                            to="/requestSend"
                        >
                            Envoyez la demande
                        </Button>
                    </div>

                </div>
            </div>
        );
    }
}

export default BooksellerRequest;
