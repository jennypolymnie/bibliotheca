import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Label } from 'semantic-ui-react';


const ResultsFormat = ({
    labName, directorName, website, onClick
}) => (
        <Segment raised>
            <Label color="blue" ribbon size="large">
                {labName}
            </Label>
            <div onClick={() => onClick(ResultsFormat)}>
                <p>
                    Nom du responsable:
                {directorName}
                    {' '}

                </p>
                <p>
                    Site web du laboratoire:
                <a href="www.curml.ch">{website}</a>
                </p>

            </div>
        </Segment>
    );

ResultsFormat.PropTypes = {
    labName: PropTypes.string.isRequired,
    directorName: PropTypes.string.isRequired,
    webSite: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

ResultsFormat.PropTypes.defaultProps = {
    labName: '',
    directorName: ''
};


export default ResultsFormat;
