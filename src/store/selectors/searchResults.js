import { createSelector } from 'reselect';
import BdArticles from '../../components/views/search-results/BdArticles';

export const userRequestSelector = state => state.userRequest;

export const allArticlesSelector = () => BdArticles;

export const userRequestFieldsSelector = createSelector(
    userRequestSelector,
    userRequest => userRequest.map(field => field.id)
);

export const filteredArticleSelector = createSelector(
    [userRequestSelector, allArticlesSelector],
    (userRequest, allArticles) => userRequest.reduce(
        (filteredResult, currentUserOption) => filteredResult
            .filter(article => article[currentUserOption.id] === currentUserOption.value),
        allArticles
    )
);

export const scoredArticleSelector = createSelector(
    [userRequestSelector, allArticlesSelector],
    (userRequest, allArticles) => {
        const scoredArticles = [];
        allArticles.forEach(article => {
            const score = userRequest.filter(option => article[option.id] === option.value).length;
            if (score > 0) {
                scoredArticles.push(
                    {
                        ...article,
                        score
                    }
                );
            }
        });
        return scoredArticles;
    }
);

export const sortedArticleSelector = createSelector(
    scoredArticleSelector,
    scoredArticles => scoredArticles.sort((a, b) => (b.score - a.score))
);

export const countFilteredArticlesSelector = createSelector(
    filteredArticleSelector,
    filteredArticles => (
        filteredArticles.length
    )
);

export const countSortedArticlesSelector = createSelector(
    sortedArticleSelector,
    sortedArticles => (
        sortedArticles.length
    )
);
