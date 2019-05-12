
import React from 'react';
import PropTypes from 'prop-types';
import { Popup, Container } from 'semantic-ui-react';
import ReferenceFormat from './ReferenceFormat';

const PopupAbstract = ({
    title, author, year, journal, abstract, reference
}) => {
    const article = (
        <Container>
            <ReferenceFormat title={title} year={year} author={author} journal={journal} reference={reference} />
        </Container>
    );
    return (
        <Popup
            trigger={article}
            wide="very"
        >
            <Popup.Header>Abstract</Popup.Header>
            <Popup.Content>
                {abstract}
            </Popup.Content>
        </Popup>
    );
};

PopupAbstract.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired

};

export default PopupAbstract;
