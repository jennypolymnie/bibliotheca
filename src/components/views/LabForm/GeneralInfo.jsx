import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/actionCreators';

const GeneralInfo = () => (

    <Form>
        <Form.Group widths="equal">
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

function mapStateToProps(state) {
    return {
        labName: state.updateProfile.labName,
        firstName: state.updateProfile.firstName,
        lastName: state.updateProfile.lastName,
        country: state.updateProfile.country,
        website: state.updateProfile.website,
        technicalEmail: state.updateProfile.technicalEmail,
        interpretationEmail: state.updateProfile.interpretationEmail
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const GeneralInfoConnect = connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);

export default GeneralInfoConnect;
