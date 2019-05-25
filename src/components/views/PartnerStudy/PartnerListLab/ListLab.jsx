import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label, Container } from 'semantic-ui-react';


const ListLab = ({
    labName, directorName, email, website, onClick
}) => (
    <Segment raised>
        <Label color="blue" ribbon size="large">
            {labName}
        </Label>
        <Container text-align="left" onClick={() => onClick(ListLab)}>
            <p>
                {`Nom du responsable: ${directorName}`}
            </p>
            <p>
                <span>Email: </span>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
            </p>
            <p>
                <span>Site web du laboratoire: </span>
                <a href={`http://${website}`}>{website}</a>
            </p>

        </Container>
    </Segment>
);

ListLab.propTypes = {
    labName: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


export default ListLab;
