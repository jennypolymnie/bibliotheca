import React from 'react';
import {
    Reveal, Icon, Dropdown
} from 'semantic-ui-react';

const AddNewElement = () => (
    <Reveal animated="move right">
        <Reveal.Content visible>
            <p>
                <Icon color="green" name="plus circle" />
                Ajouter un kit
            </p>
        </Reveal.Content>
        <Reveal.Content hidden>
            <Dropdown
                selection
                placeholder="Choisir"
            />
        </Reveal.Content>
    </Reveal>
);

export default AddNewElement;
