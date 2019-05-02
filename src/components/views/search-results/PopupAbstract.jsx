// import React from 'react';
// import {
//     Popup
// } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

// const PopupAbstract = ({ trigger }) => (
//     <Popup trigger={trigger} on="hover">
//         <Popup.Header>Abstract</Popup.Header>
//         <Popup.Content>
//           Hello
//         </Popup.Content>
//     </Popup>
// );

import React from 'react';
import { Popup } from 'semantic-ui-react';
import ReferenceFormat from './ReferenceFormat';

const PopupAbstract = ({title, author, year, journal, abstract, reference}) => (
    <Popup
        trigger={<ReferenceFormat title={title} year={year} author={author} journal={journal} reference={reference} />}
        content={abstract}
        basic
        position="top left"
    />
);

export default PopupAbstract;

// const PopupAbstract = ({ abstract, trigger }) => (
//     <Popup trigger={trigger}>
//         <Popup.Header>Abstract</Popup.Header>
//         <Popup.Content>
//             {abstract}
//         </Popup.Content>
//     </Popup>
// );



