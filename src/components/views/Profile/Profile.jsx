import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProfileContent from './ProfileContent';
import Type from './Type';

const panes = Type.map(({
    name, tab, to, text, id, cost
}) => ({
    menuItem: tab,
    render: () => (
        <Tab.Pane key={id}>
            <ProfileContent name={name} text={text} to={to} cost={cost} />
        </Tab.Pane>
    )
}));
const Profile = () => <Tab panes={panes} />;

export default Profile;
