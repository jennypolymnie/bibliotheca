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
            id={selectedArticle.id}
            author={selectedArticle.author}
            title={selectedArticle.title}
            reference={selectedArticle.reference}
            abstract={selectedArticle.abstract}
            year={selectedArticle.year}
            link={selectedArticle.link}
            journal={selectedArticle.journal}
            articleCharacteristics={selectedArticle.articleCharacteristics}
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
