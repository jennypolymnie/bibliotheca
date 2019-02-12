import React from 'react';
import { Label } from 'semantic-ui-react';
import './stylesheets/NbArticle.css';
import PropTypes from 'prop-types';

const CountElement = ({ name, count }) => (
    <div className="CountElement">
        <Label color="blue" basic>
            <span>
                {' '}
                {name}
                {' '}
            </span>
            <span>
                {' '}
                {count}
                {' '}
            </span>
        </Label>
    </div>
);

CountElement.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default CountElement;
