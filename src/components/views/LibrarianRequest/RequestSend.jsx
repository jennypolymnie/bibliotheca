import React from 'react';
import { Message } from 'semantic-ui-react';

const RequestSend = () => (

    <Message positive>
        <Message.Header>Votre requête a bien été envoyée</Message.Header>
        <p>
            {'La bibliothécaire vous répondra au plus vite.'}
        </p>
    </Message>
);
export default RequestSend;
