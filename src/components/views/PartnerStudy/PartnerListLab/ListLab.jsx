import React from 'react';
import './ListLab.css';
import PropTypes from 'prop-types';
import { Segment, Label } from 'semantic-ui-react';


const ListLab = ({
    labName, directorName, email, website, onClick
}) => (
    // <div className="ListLabo">
    <Segment raised>
        <Label color="blue" ribbon size="large">
            {labName}
        </Label>
        <div onClick={() => onClick(ListLab)}>
            <p>
                    Nom du responsable:
                {directorName}
                {' '}

            </p>
            <p>
                    Email:
                {email}
            </p>
            <p>
                    Site web du laboratoire:
                {website}
            </p>

        </div>
    </Segment>
    // </div>
);

ListLab.PropTypes = {
    labName: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    webSite: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};


export default ListLab;
