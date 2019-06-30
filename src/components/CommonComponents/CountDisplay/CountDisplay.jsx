import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CountDisplay = ({ name, count }) => (
    <Container fluid>
        <span>
            {`${name}: ${count}`}
        </span>
    </Container>
);

CountDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default CountDisplay;
