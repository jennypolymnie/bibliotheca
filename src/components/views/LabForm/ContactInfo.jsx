import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const ContactInfo = () => (

    <Form>
        <Form.Group grouped>
            <Form.Field
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
    </Form>

);

export default ContactInfo;
