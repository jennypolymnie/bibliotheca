import React from 'react';
import PropTypes from 'prop-types';


const ReferenceFormat = ({
    author, title, journal, reference, year
}) => (
    <div>
        <span>
            {`${author}. `}
            {`(${year}). `}
            {`${title}. `}
            <i>{journal}</i>
            {' '}
            {`${reference}. `}
        </span>
    </div>
);

ReferenceFormat.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};


export default ReferenceFormat;
