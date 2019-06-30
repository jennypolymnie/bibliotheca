import React from 'react';
import { Message } from 'semantic-ui-react';


const ProposalSend = () => (

    <Message positive>
        <Message.Header>Merci pour votre contribution à Bibliothéca</Message.Header>
        <p>
            {'La bibliothécaire va classifier l\'article dans les 2 jours ouvrables.'}
        </p>
    </Message>
);
export default ProposalSend;
