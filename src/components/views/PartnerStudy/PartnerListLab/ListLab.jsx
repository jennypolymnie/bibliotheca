import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label, Button } from 'semantic-ui-react';


const ListLab = ({
    labName, directorName, email, website, onClick
}) => (
    <Segment raised>
        <Label color="blue" ribbon size="large">
            {labName}
        </Label>
        <Button as="div" onClick={() => onClick(ListLab)}>
            <p>
                    Nom du responsable:
                {directorName}
                {' '}

            </p>
            <p>
                    Email:
                <a href="mailto:">
                    {' '}
                    {email}
                    {' '}
                </a>
            </p>
            <p>
                    Site web du laboratoire:
                <a href="www.curml.ch">{website}</a>
            </p>

        </Button>
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
