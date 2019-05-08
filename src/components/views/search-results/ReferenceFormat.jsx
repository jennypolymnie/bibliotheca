import React from 'react';
import PropTypes from 'prop-types';
import { Card, Popup } from 'semantic-ui-react';


const ReferenceFormat = ({
    author, title, journal, reference, year
}) => (
    <Card fluid>
        <Card.Content>
            <Card.Header>
                {`${title}. `}
            </Card.Header>
            <Card.Description>
                {`${author}. `}
                {`(${year}). `}
                <i>{journal}</i>
                {' '}
                {`${reference}. `}
            </Card.Description>
        </Card.Content>
    </Card>
);

// const PopupCard = () => (
//     <Popup trigger={ReferenceFormat}>
//         <Popup.Header>Hello</Popup.Header>
//         <Popup.Content>
//         Coucou
//         </Popup.Content>
//     </Popup>
// );

// export default PopupCard;

ReferenceFormat.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};


export default ReferenceFormat;
