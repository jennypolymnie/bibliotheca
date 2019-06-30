import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';


const GeneralInfo = props => (
    <Form>
        <Form.Group widths="equal">
            <Form.Input
                fluid
                required
                onChange={(e, d) => props.onChange(e, d, 'labName')}
                value={props.labName}
                label="Nom du laboratoire"
                placeholder="Nom du laboratoire"
            />
            <Form.Input
                fluid
                onChange={(e, d) => props.onChange(e, d, 'website')}
                value={props.website}
                label="Site web"
                placeholder="Site web"
            />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Input
                fluid
                required
                onChange={(e, d) => props.onChange(e, d, 'lastName')}
                value={props.lastName}
                label="Nom du directeur du laboratoire"
                placeholder="Nom"
            />
            <Form.Input
                required
                onChange={(e, d) => props.onChange(e, d, 'firstName')}
                value={props.firstName}
                label="Prénom du directeur du laboratoire"
                placeholder="Prénom"
            />


        </Form.Group>
        <Form.Group widths="equal">
            <Form.Input
                fluid
                onChange={(e, d) => props.onChange(e, d, 'technicalEmail')}
                value={props.technicalEmail}
                label="Email du contact technique"
                placeholder="email technique"
                type="email"
            />

            <Form.Input
                onChange={(e, d) => props.onChange(e, d, 'interpretationEmail')}
                value={props.interpretationEmail}
                label="Email du contact interprétation"
                placeholder="email interpretation"
                type="email"
            />
        </Form.Group>

        <Form.Group>

            <Form.Input
                required
                onChange={(e, d) => props.onChange(e, d, 'country')}
                value={props.country}
                label="Pays"
                placeholder="Pays"
            />

        </Form.Group>

    </Form>
);


GeneralInfo.propTypes = {
    labName: PropTypes.string,
    website: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    technicalEmail: PropTypes.string,
    interpretationEmail: PropTypes.string,
    country: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

GeneralInfo.defaultProps = {
    labName: null,
    website: null,
    lastName: null,
    firstName: null,
    technicalEmail: null,
    interpretationEmail: null,
    country: null
};

export default GeneralInfo;
