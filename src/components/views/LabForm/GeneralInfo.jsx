import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/actionCreators';

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

const GeneralInfo = props => (
    <Form>
        <Form.Group widths="equal">
            <Form.Field
                fluid
                required
                control={Input}
                value={props.labName}
                label="Nom du laboratoire"
                placeholder="Nom du laboratoire"
            />
            <Form.Field
                fluid
                control={Input}
                value={props.website}
                label="Site web"
                placeholder="Site web"
            />
        </Form.Group>

        <Form.Group widths="equal">
            <Form.Field
                fluid
                required
                control={Input}
                value={props.lastName}
                label="Nom du directeur du laboratoire"
                placeholder="Nom"
            />
            <Form.Field
                required
                control={Input}
                value={props.firstName}
                label="Prénom du directeur du laboratoire"
                placeholder="Prénom"
            />


        </Form.Group>
        <Form.Group widths="equal">
            <Form.Field
                fluid
                control={Input}
                value={props.technicalEmail}
                label="Email du contact technique"
                placeholder="email technique"
                type="email"
            />

            <Form.Field
                control={Input}
                value={props.interpretationEmail}
                label="Email du contact interprétation"
                placeholder="email interpretation"
                type="email"
            />
        </Form.Group>

        <Form.Group>

            <Form.Field
                required
                control={Input}
                value={props.country}
                label="Pays"
                placeholder="Pays"
            />

        </Form.Group>

        {/* <Button onClick={props.updateProfile} /> */}
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
    updateProfile: PropTypes.func
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


const GeneralInfoConnect = connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);

export default GeneralInfoConnect;
