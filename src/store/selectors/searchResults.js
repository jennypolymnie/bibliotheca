import { createSelector } from 'reselect';
import BdArticles from '../../components/views/search-results/BdArticles';

export const userRequestSelector = state => state.userRequest;

export const allArticlesSelector = () => BdArticles;

export const userRequestFieldsSelector = createSelector(
    userRequestSelector,
    userRequest => userRequest.options.map(field => field.id)
);

export const filterCategoriesArticleSelector = createSelector(
    [userRequestSelector, allArticlesSelector],
    (userRequest, allArticles) => allArticles.filter(
        article => article.categories.includes(userRequest.category)
    )
);


export const filteredArticleSelector = createSelector(
    [userRequestSelector, filterCategoriesArticleSelector],
    (userRequest, allArticles) => userRequest.options.reduce(
        (filteredResult, currentUserOption) => filteredResult
            .filter(article => article[currentUserOption.id] === currentUserOption.value),
        allArticles
    )
);

export const scoredArticleSelector = createSelector(
    [userRequestSelector, filterCategoriesArticleSelector],
    (userRequest, allArticles) => {
        const scoredArticles = [];
        allArticles.forEach(article => {
            const score = userRequest.options.filter(option => article[option.id] === option.value).length;
            if (score > 0) {
                scoredArticles.push(
                    {
                        ...article,
                        searchRanking: score
                    }
                );
            }
        });
        return scoredArticles;
    }
);

export const sortedArticleSelector = createSelector(
    scoredArticleSelector,
    scoredArticles => scoredArticles.sort((a, b) => (b.searchRanking - a.searchRanking) || (b.score - a.score))
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
