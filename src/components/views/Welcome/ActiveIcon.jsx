import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


const renderIcon = (src, iconProps) => {
    if (src) {
        return (
            <Icon {...iconProps}>
                <Image src={src} centered />
            </Icon>
        );
    }
    return <Icon {...iconProps} />;
};

const generateIconProps = props => {
    const {
        to, className, iconName, ...otherProps
    } = props;
    if (to) {
        return {
            ...otherProps,
            link: true,
            className: `${(className || '')} sidebar-icon`,
            name: iconName
        };
    }
    return {
        ...otherProps,
        className,
        name: iconName
    };
};

const ActiveItem = C => props => {
    const { to, name, src } = props;
    const iconProps = generateIconProps(props);
    const redirect = toPath => {
        if (toPath) {
            props.history.push({
                pathname: toPath
            });
        }
    };
    
    return (
        <C onClick={() => redirect(to)} name={name} active={false}>
            {renderIcon(src, iconProps)}
        </C>
    );
};

ActiveItem.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.any,
    iconName: PropTypes.string,
    history: PropTypes.any
};
ActiveItem.defaultProps = {
    to: undefined,
    name: undefined,
    src: undefined,
    iconName: undefined,
    history: undefined
};

export const AvailableActiveItem = withRouter(ActiveItem(Menu.Item));
