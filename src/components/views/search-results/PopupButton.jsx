import React from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PopupButton = () => (
    <Popup
        trigger={<Button as={Link} to="/review" color="blue" icon="add" />}
        content="Donnez votre avis"
        basic
        position="top left"
    />
);

export default PopupButton;
