import React from 'react';
import {
    Segment, Rating, Grid, Label
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Review.less';


const Review = ({
    rigor, statistic, results, interpretation, comments
}) => (
    <Segment>
        <Grid>
            <Grid.Column className="review-column">
                <Grid.Row>
                    <Label basic as="h4" className="review-rating">
                        <Label.Detail className="rating-details">
                            <Rating icon="star" defaultRating={rigor} maxRating={3} disabled size="mini" />
                        </Label.Detail>
                        Rigueur
                    </Label>
                </Grid.Row>
                <Grid.Row>
                    <Label basic as="h4" className="review-rating">
                        <Label.Detail className="rating-details">
                            <Rating icon="star" defaultRating={statistic} maxRating={3} disabled size="mini" />
                        </Label.Detail>
                        Statistique
                    </Label>
                </Grid.Row>
                <Grid.Row>
                    <Label basic as="h4" className="review-rating">
                        <Label.Detail className="rating-details">
                            <Rating icon="star" defaultRating={results} maxRating={3} disabled size="mini" />
                        </Label.Detail>
                        Résultats
                    </Label>
                </Grid.Row>
                <Grid.Row>
                    <Label basic as="h4" className="review-rating">
                        <Label.Detail className="rating-details">
                            <Rating icon="star" defaultRating={interpretation} maxRating={3} disabled size="mini" />
                        </Label.Detail>
                        Interprétation
                    </Label>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column className="comments-column">
                <Grid.Row>
                    <Label basic as="h4" className="review-rating">
                        Commentaires
                    </Label>
                </Grid.Row>
                <Grid.Row>
                    {comments}
                </Grid.Row>
            </Grid.Column>
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
