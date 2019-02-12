import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const generateItems = items => items.map(topic => (
    <List.Item>
        <List.Icon name={topic.icon} size="large" color={topic.color} verticalAlign="middle" />
        <List.Content>
            <List.Header as="a">{topic.name}</List.Header>
            <List.Description as="a">{topic.description}</List.Description>
        </List.Content>
    </List.Item>
));


const DiscussionItems = props => (
    <List divided relaxed="very" size="large">
        {generateItems(props.discussionItems)}
    </List>
);

DiscussionItems.propTypes = {
    discussionItems: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        colore: PropTypes.string,
        icon: PropTypes.string
    })).isRequired
};

export default DiscussionItems;
