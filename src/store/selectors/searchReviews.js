import { createSelector } from 'reselect';
import { allArticlesSelector } from './searchResults';
import BdReviews from '../../components/Views/Review/BdReviews';

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

export const articleScoreSelector = createSelector(
    filteredArticleReviewsSelector,
    articleReviews => articleReviews.reduce((totalScore, currentArticle) => totalScore + currentArticle.score, 0) / articleReviews.length
);
