import React from 'react';
import { Link, Menu, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const ActiveItem = C => props => {
    const {
        to, className, iconName, name, ...otherProps
    } = props;
    const redirect = () => {
        console.log('clicked');
        props.history.push({
            pathname: to
        });
    };
    if (to) {
        return (
            <C onClick={redirect} name={name} active={false}>
                <Icon {...otherProps} link className={`${(className || '')} sidebar-icon`} name={iconName} />
            </C>
        );
    }
    return (
        <C name={name}>
            <Icon {...otherProps} className={className} name={iconName} />
        </C>
    );
};

export const AvailableActiveItem = withRouter(ActiveItem(Menu.Item));
