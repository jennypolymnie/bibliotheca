import React, { Component } from 'react';
import {
    Button, Form, TextArea, Input, Message
} from 'semantic-ui-react';
import MenuSuperieur from '../search-results/MenuSuperieur';
import './BooksellerRequest.css';
import { Link } from 'react-router-dom';


class BooksellerRequest extends Component {
    render() {
        return (

            <div className="BooksellerRequest">

                <MenuSuperieur />

                <div>
                    <Message
                        color="blue"
                        attached
                        header="Poser une question à la bibliothécaire"
                        content="Que puis je faire pour vous?"
                    />
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
