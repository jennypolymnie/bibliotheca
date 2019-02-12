import React from 'react';
import PropTypes from 'prop-types';
import {
    Button, Grid, Icon, Search
} from 'semantic-ui-react';

class ThemeSelector extends React.Component {
    constructor(props) {
        const {
            themes, ...buttonProps
        } = props;
        super(props);
        this.state = {
            themes,
            buttonProps
        };
        this.generateButtons = this.generateButtons.bind(this);
    }

    generateButtons = () => {
        const buttons = [];
        const { themes, buttonProps } = this.state;
        themes.forEach(theme => buttons.push((
            <Button key={`${theme.name}-${theme.selected}`} {...buttonProps} color="blue" inverted>
                <Icon name={theme.icon} />
                {theme.name}
            </Button>
        )));
        return buttons;
    }

    render = () => (
        <Grid container>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Search placeholder="Trouver une discussion" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Button.Group>
                        <Button
                            {...this.state.buttonProps}
                            active
                            color="blue"
                        >
                            {'Tous'}
                        </Button>
                        <Button.Group>
                            {this.generateButtons(this.state.selectedThemes)}
                        </Button.Group>
                    </Button.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

ThemeSelector.propTypes = {
    themes: PropTypes.shape({
        name: PropTypes.string,
        selected: PropTypes.bool
    }).isRequired,
    onUpdate: PropTypes.func.isRequired

};
export default ThemeSelector;
