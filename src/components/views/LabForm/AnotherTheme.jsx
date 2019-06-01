import React from 'react';
import {
    Form
} from 'semantic-ui-react';

const AnotherTheme = () => (

    <Form>
        <Form.Field label="Intérêt de collaboration sur un autre thème que les votres" />
        <Form.Field>
            <Form.Checkbox
                label="Oui pour un projet de développement"
                name="DifferentTheme"
                value="developpement"
            />
        </Form.Field>
        <Form.Field>
            <Form.Checkbox
                label="Oui pour un projet de recherche"
                name="DifferentTheme"
                value="recherche"
            />
        </Form.Field>
        <Form.Field>
            <Form.Checkbox
                label="Oui pour un projet de validation"
                name="DifferentTheme"
                value="validation"
                checked

            />
        </Form.Field>
        <Form.Field>
            <Form.Checkbox
                label="Non"
                name="DifferentTheme"
                value="non"
            />
        </Form.Field>
    </Form>
);

export default AnotherTheme;
