import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    List
} from 'semantic-ui-react';
import Review from './Review';
import StandardLayout from '../../layout/StandardLayout';
import Article from '../search-results/Article';
import { filteredArticleReviewsSelector, selectedArticleSelector } from '../../../store/selectors/searchReviews';


const ReviewSummary = ({
    reviews,
    selectedArticle
}) => (
    <div>
        <Article
            article={selectedArticle}
            canReview={false}
        />
        <List relaxed>
            {reviews.length
                ? reviews
                    .map(option => (
                        <Review
                            rigor={option.rigor}
                            statistic={option.statistic}
                            results={option.results}
                            interpretation={option.interpretation}
                            comments={option.comments}
                        />
                    ))
                : <div>{'Aucun avis n\'a été émis pour le moment'}</div>
            }
        </List>
    </div>
);

ReviewSummary.propTypes = {
    reviews: PropTypes.array,
    selectedArticle: PropTypes.object
};

ReviewSummary.defaultProps = {
    reviews: [],
    selectedArticle: {}
};

const mapStateToProps = state => ({
    reviews: filteredArticleReviewsSelector(state),
    selectedArticle: selectedArticleSelector(state)
});

export default connect(mapStateToProps)(StandardLayout(ReviewSummary, 'Avis sur Article'));
