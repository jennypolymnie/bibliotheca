import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProfileContent = props => {
    const { to, text, cost } = props;
    return (
        <Grid container>
            <Grid.Row>
                {text}
            </Grid.Row>
            <Grid.Row>
                <p>
                    Le coût pour utiliser Bibliothéca sera de:
                    {cost}
                    {' '}
                    euros / mois
                </p>
            </Grid.Row>
            <Grid.Row>
                <Button as={Link} to={to} size="large" color="blue">
                    {' '}
                    {'Sélectionner ce profil'}
                    {' '}
                </Button>
            </Grid.Row>
        </Grid>
    );
};

ProfileContent.propTypes = {
    text: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    to: PropTypes.string.isRequired
};

export default ProfileContent;
