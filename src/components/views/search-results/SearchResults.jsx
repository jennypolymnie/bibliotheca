
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Checkbox, Grid, List,
    Container, Header
} from 'semantic-ui-react';
import Article from './Article';
import StandardLayout from '../../layout/StandardLayout';
import {
    userRequestSelector, sortedArticleSelector, countSortedArticlesSelector
} from '../../../store/selectors/searchResults';
import './stylesheets/SearchResults.css';

const SearchResults = ({
    userRequest,
    filteredArticles,
    count
    // fieldRequest
}) => (
    <div className="recherche">
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Checkbox toggle label="Utiliser le profil du laboratoire" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                {userRequest.options.map(option => (
                    <Grid.Column key={option.id}>
                        <Container fluid className="padded-container">
                            {option.label}
                            <Header as="h4">{option.value}</Header>
                        </Container>
                    </Grid.Column>
                ))}
                <Grid.Column>
                    <Container fluid className="padded-container">
                        Articles trouvés
                        <Header as="h4">{count}</Header>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <List relaxed>
            {filteredArticles.length
                ? filteredArticles
                    .map(article => (
                        <Article
                            article={article}
                            key={article.name}
                        />
                    ))
                : '' }
        </List>
    </div>
);

SearchResults.propTypes = {
    userRequest: PropTypes.array.isRequired,
    filteredArticles: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    userRequest: userRequestSelector(state),
    filteredArticles: sortedArticleSelector(state),
    count: countSortedArticlesSelector(state)
    // fieldRequest: userRequestFieldsSelector(state)

});

export default connect(mapStateToProps)(StandardLayout(SearchResults, 'Résultat de la recherche'));
