import React from 'react';
import PropTypes from 'prop-types';
import {
    Button
} from 'semantic-ui-react';

const Toggle = props => (
    <Button.Group>
        <Button inverted color="blue" onClick={() => props.handleChange('chemistry')} positive={props.option === 'chemistry'}> Chimie </Button>
        <Button.Or text="ou" />
        <Button inverted color="blue" onClick={() => props.handleChange('equipment')} positive={props.option === 'equipment'}> Equipement </Button>
    </Button.Group>
);

Toggle.propTypes = {
    handleChange: PropTypes.func.isRequired,
    option: PropTypes.string
};
Toggle.defaultProps = {
    option: 'chemistry'
};
export default Toggle;
