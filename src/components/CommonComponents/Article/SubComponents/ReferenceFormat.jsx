import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';


const ReferenceFormat = ({
    author, title, journal, reference, year
}) => (
    <React.Fragment>
        <Header content={`${title}. `} />
        <p>
            {`${author}. `}
            {`(${year}). `}
            <i>{journal}</i>
            {` ${reference}. `}
        </p>
    </React.Fragment>
);

ReferenceFormat.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};


export default ReferenceFormat;
