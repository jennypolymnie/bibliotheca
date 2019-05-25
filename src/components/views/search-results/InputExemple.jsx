import React from 'react';
import { Input, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const InputExemple = ({ info, entry }) => (
    <div className="Input">
        <Label>
            {' '}
            {info}
        </Label>
        <Input placeholder={entry} />
    </div>
);

InputExemple.propTypes = {
    info: PropTypes.string.isRequired,
    entry: PropTypes.number.isRequired
};
export default InputExemple;
