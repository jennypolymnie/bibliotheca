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

const ActiveItem = C => {
    const wrapped = props => {
        const {
            to,
            name,
            src,
            history
        } = props;

        const iconProps = generateIconProps(props);
        const redirect = toPath => {
            if (toPath) {
                history.push({
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

    wrapped.propTypes = {
        to: PropTypes.string,
        name: PropTypes.string,
        src: PropTypes.any,
        history: PropTypes.any
    };
    wrapped.defaultProps = {
        to: undefined,
        name: undefined,
        src: undefined,
        history: undefined
    };

    return wrapped;
};

export const AvailableActiveItem = withRouter(ActiveItem(Menu.Item));
