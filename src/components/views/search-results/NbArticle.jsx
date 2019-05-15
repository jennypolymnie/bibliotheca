import React from 'react';
import { Container } from 'semantic-ui-react';
import './stylesheets/NbArticle.css';
import PropTypes from 'prop-types';

const CountElement = ({ name, count }) => (
    <Container fluid>
        <span>
            {`${name}: ${count}`}
        </span>
    </Container>
);

CountElement.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default CountElement;
