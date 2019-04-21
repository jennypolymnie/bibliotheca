import React from 'react';
import { Form, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ResearchProfile = props => (

    <div>
        <Grid container padded="false">
            <Grid.Row>
                <Grid.Column width={6}>
                    <Form>
                        <Form.Group grouped width="equal">
                            {props.researchThemesOptions.map(theme => (
                                <Form.Checkbox
                                    label={theme.name}
                                    checked={props.researchThemes[theme.value] || false}
                                    onChange={(e, d) => props.onChange(e, d, theme.value)}
                                />
                            ))}
                        </Form.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);


ResearchProfile.propTypes = {
    onChange: PropTypes.func.isRequired,
    researchThemesOptions: PropTypes.bool.isRequired,
    researchThemes: PropTypes.object
};

ResearchProfile.defaultProps = {
    researchThemes: {}
};

export default ResearchProfile;
