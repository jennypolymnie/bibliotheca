import React from 'react';
import { Label } from 'semantic-ui-react';
import './stylesheets/NbArticle.css';
import PropTypes from 'prop-types';

const CountElement = ({ name, count }) => (
    <div className="CountElement">
        <Label>
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

CountElement.PropTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
};

export default CountElement;
