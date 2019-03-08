import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const GeneralInfo = () => (

    <Form>
        <Form.Group>
            <Form.Field
                fluid
                required
                control={Input}
                label="Nom du laboratoire"
                placeholder="Nom du laboratoire"
            />
            <Form.Field
                fluid
                control={Input}
                label="Site web"
                placeholder="Site web"
            />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Field
                fluid
                required
                control={Input}
                label="Nom du directeur du laboratoire"
                placeholder="Nom"
            />
            <Form.Field
                required
                control={Input}
                label="Prénom du directeur du laboratoire"
                placeholder="Prénom"
            />


        </Form.Group>
        <Form.Group widths="equal">
            <Form.Field
                fluid
                control={Input}
                label="Email du contact technique"
                placeholder="email technique"
                type="email"
            />

            <Form.Field
                control={Input}
                label="Email du contact interprétation"
                placeholder="email interpretation"
                type="email"
            />
        </Form.Group>

        <Form.Group>

            <Form.Field
                required
                control={Input}
                label="Pays"
                placeholder="Pays"
            />

        </Form.Group>
    </Form>

);

export default GeneralInfo;
