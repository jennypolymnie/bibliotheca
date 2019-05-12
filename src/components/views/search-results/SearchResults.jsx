
import React from 'react';
import { connect } from 'react-redux';
import {
    Input, Checkbox, Grid, Segment, List
} from 'semantic-ui-react';
// import './stylesheets/SearchResults.css';
import CountElement from './NbArticle';
import Article from './Article';
import StandardLayout from '../../layout/StandardLayout';
import {
    userRequestSelector, filteredArticleSelector, countFilteredArticlesSelector, userRequestFieldsSelector
} from '../../../store/selectors/searchResults';

const SearchResults = ({
    userRequest,
    filteredArticles,
    count,
    // fieldRequest
}) => (
    <div className="recherche">
        <Segment secondary>
            <Grid padded="vertically">
                <Grid.Row>
                    <Grid.Column width={4}>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Checkbox toggle label="Utiliser le profil du laboratoire" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {userRequest.map(option => (
                        <Grid.Column>
                            <Input label={option.label} value={option.value} />
                        </Grid.Column>
                    ))}
                </Grid.Row>
                <Grid.Row>
                    <CountElement name="Nombre d'articles correspondant à votre recherche" count={count} />
                </Grid.Row>
            </Grid>
        </Segment>
        <List relaxed>
            {filteredArticles
                .map(({
                    authors, title, id, abstract, journal, year, linkScienceDirect, reference, ...otherCharacteristics
                }) => (
                    <Article
                        key={id}
                        author={authors}
                        title={title}
                        journal={journal}
                        abstract={abstract}
                        reference={reference}
                        link={linkScienceDirect}
                        year={year}
                        otherCharacteristics={otherCharacteristics}
                    />
                ))
            }

            {/* :
     
            <div>No data found </div>; */}

        </List>
    </div>
);


const mapStateToProps = state => ({
    userRequest: userRequestSelector(state),
    filteredArticles: filteredArticleSelector(state),
    count: countFilteredArticlesSelector(state)
    // fieldRequest: userRequestFieldsSelector(state)

});

export default connect(mapStateToProps)(StandardLayout(SearchResults, 'Résultat de la recherche'));
