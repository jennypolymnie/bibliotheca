import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label, Container } from 'semantic-ui-react';

const ResultsFormat = ({
    labName, directorName, email, website, onClick, site
}) => (
    <Segment raised>
        <Label color="blue" ribbon size="large">
            {labName}
        </Label>
        <Container text-align="left" onClick={() => onClick(ResultsFormat)}>
            <p>
                {`Nom du responsable: ${directorName}`}
            </p>
            <p>
                <span>Email pour les questions techniques: </span>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
            </p>
            <p>
                <span>Site web du laboratoire: </span>
                <a href={website}>{site}</a>
            </p>

        </Container>
    </Segment>
);

ResultsFormat.propTypes = {
    labName: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    site: PropTypes.string.isRequired
};

export default ResultsFormat;
