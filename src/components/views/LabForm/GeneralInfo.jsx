import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const GeneralInfo = () => (

    <Form>
        <Form.Group grouped widths="equal">
            <Form.Field
                required
                control={Input}
                label="Nom"
                placeholder="Nom"
            />
            <Form.Field
                required
                control={Input}
                label="Prénom"
                placeholder="Nom et Prénom du directeur laboratoire"
            />

            <Form.Field
                required
                control={Input}
                label="Nom du laboratoire"
                placeholder="Nom du laboratoire"
            />

            <Form.Field
                required
                control={Input}
                label="Pays"
                placeholder="Pays"
            />
            <Form.Field
                control={Input}
                label="Site web"
                placeholder="Site web"
            />
        </Form.Group>
    </Form>

);

export default GeneralInfo;
