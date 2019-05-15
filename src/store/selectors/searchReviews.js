import { createSelector } from 'reselect';
import { allArticlesSelector } from './searchResults';
import BdReviews from '../../components/views/Review/BdReviews';

export const allArticlesReviewsSelector = () => BdReviews;

export const articleSelector = state => state.selectedArticle;

export const filteredArticleReviewsSelector = createSelector(
    [articleSelector, allArticlesReviewsSelector],
    (selectedArticleId, allReviews) => allReviews.filter(review => review.articleID === selectedArticleId)
);

export const selectedArticleSelector = createSelector(
    [articleSelector, allArticlesSelector],
    (selectedArticleId, allArticles) => allArticles.find(article => article.id === selectedArticleId)
);

export const countReviewsSelector = createSelector(
    filteredArticleReviewsSelector,
    articleReviews => articleReviews.length
);
