import React from 'react';
import {
    Segment, Rating, Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Review = ({
    rigor, statistic, results, interpretation, comments
}) => (
    <Segment>
        <Grid>
            <Grid.Row>
                <Grid.Column width={3}>
                    <span>Rigueur</span>
                    <Rating icon="star" defaultRating={rigor} maxRating={3} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <span>Statistique</span>
                    <Rating icon="star" defaultRating={statistic} maxRating={3} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <span>Résultats</span>
                    <Rating icon="star" defaultRating={results} maxRating={3} />
                </Grid.Column>
                <Grid.Column width={3}>
                    <span>Interprétation</span>
                    <Rating icon="star" defaultRating={interpretation} maxRating={3} />
                </Grid.Column>
            </Grid.Row>
            <span>Commentaires</span>
            {comments}
            <Grid.Row>
            </Grid.Row>
        </Grid>
    </Segment>

);

Review.propTypes = {
    rigor: PropTypes.string.isRequired,
    statistic: PropTypes.string.isRequired,
    results: PropTypes.string.isRequired,
    interpretation: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired
};

export default Review;
