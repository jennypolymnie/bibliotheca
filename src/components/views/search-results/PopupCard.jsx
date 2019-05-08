import React from 'react';
import { Popup, Card } from 'semantic-ui-react';

const ExampleCard = (
    <Card>
        <Card.Content>
            <Card.Header>My Neighbor Totoro</Card.Header>
            <Card.Description>
        Two sisters move to the country with their father in order to be closer to their
        hospitalized mother, and discover the surrounding trees are inhabited by magical spirits.
            </Card.Description>
        </Card.Content>
    </Card>
);

const PopupCard = () => (
    <Popup trigger={ExampleCard}>
        <Popup.Header>Hello</Popup.Header>
        <Popup.Content>
        Coucou
        </Popup.Content>
    </Popup>
);

export default PopupCard;
