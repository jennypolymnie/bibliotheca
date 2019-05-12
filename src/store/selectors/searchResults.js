import { createSelector } from 'reselect';
import BdArticles from '../../components/views/search-results/BdArticles';

export const userRequestSelector = state => state.userRequest;

export const userRequestFieldsSelector = createSelector(
    userRequestSelector,
    userRequest => userRequest.map(field => field.id)
);

export const filteredArticleSelector = createSelector(
    userRequestSelector,
    userRequest => userRequest.reduce(
        (filteredResult, currentUserOption) => filteredResult
            .filter(article => article[currentUserOption.id] === currentUserOption.value),
        BdArticles
    )
);

export const countFilteredArticlesSelector = createSelector(
    filteredArticleSelector,
    filteredArticles => (
        filteredArticles.length
    )
);
