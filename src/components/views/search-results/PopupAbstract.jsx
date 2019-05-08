
import React from 'react';
import { Popup } from 'semantic-ui-react';
import ReferenceFormat from './ReferenceFormat';

const PopupAbstract = ({
    title, author, year, journal, abstract, reference
}) => (
    <Popup
        trigger={<ReferenceFormat title={title} year={year} author={author} journal={journal} reference={reference} />}
        basic
        position="bottom center"
        on="hover"
    >
        <Popup.Header>Abstract</Popup.Header>
        <Popup.Content>
            {abstract}
        </Popup.Content>
    </Popup>
);

export default PopupAbstract;
