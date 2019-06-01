import React from 'react';
import {
    Form
} from 'semantic-ui-react';

const OneOfYourTheme = () => (


    <Form>
        <Form.Field label="Intérêt de collaboration sur un de vos thèmes" />
        <Form.Field>
            <Form.Checkbox
                label="Oui pour un projet de développement"
                name="SameTheme"
                value="developpement"
                checked
            />
        </Form.Field>
        <Form.Field>
            <Form.Checkbox
                label="Oui pour un projet de recherche"
                name="SameTheme"
                value="recherche"
                checked

            />
        </Form.Field>
        <Form.Field>
            <Form.Checkbox
                label="Oui pour un projet de validation"
                name="SameTheme"
                value="validation"
            />
        </Form.Field>
        <Form.Field>
            <Form.Checkbox
                label="Non"
                name="SameTheme"
                value="non"
            />
        </Form.Field>
    </Form>
);

export default OneOfYourTheme;
