import React from 'react';
import PropTypes from 'prop-types';
import {
    Button, Checkbox, Label
} from 'semantic-ui-react';

const Toggle = props => (
    <Button.Group>
        <Label color="blue" basic>chimie</Label>
        <Checkbox
            toggle
            checked={props.checked}
            onChange={props.handleChange}
        />
        <Label color="blue" basic>Equipment</Label>
    </Button.Group>
);

Toggle.propTypes = {
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Toggle;
