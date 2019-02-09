import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import MenuSuperieur from '../search-results/MenuSuperieur';


class RequestSend extends Component {
    render() {
        return (

            <div className="RequestSend">

                <MenuSuperieur />

                <div>
                    <Message positive>
                        <Message.Header>Votre requête a bien été envoyée</Message.Header>
                        <p>
                La bibliothécaire vous répondra au plus vite.
                        </p>
                    </Message>
                </div>

            </div>


        );
    }
}

export default RequestSend;
