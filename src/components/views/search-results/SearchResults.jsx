
import React from 'react';
import { connect } from 'react-redux';
import {
    Checkbox, Grid, Segment, List,
    Container, Header
} from 'semantic-ui-react';
// import './stylesheets/SearchResults.css';
import CountElement from './NbArticle';
import Article from './Article';
import StandardLayout from '../../layout/StandardLayout';
import {
    userRequestSelector, sortedArticleSelector, countSortedArticlesSelector
} from '../../../store/selectors/searchResults';
import './stylesheets/SearchResults.css';

const SearchResults = ({
    userRequest,
    filteredArticles,
    count,
    // fieldRequest
}) => (
    <div className="recherche">
        {/* <Segment Segment color="yellow" raised container> */}
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Checkbox toggle label="Utiliser le profil du laboratoire" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                {userRequest.map(option => (
                    <Grid.Column>
                        <Container fluid className="padded-container">
                            {option.label}
                            <Header as='h4'>{option.value}</Header>
                        </Container>
                    </Grid.Column>
                ))}
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <CountElement name="Nombre d'articles correspondant à votre recherche" count={count} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        {/* </Segment> */}
        <List relaxed>


            {filteredArticles.length
                ? filteredArticles
                    .map(({
                        authors, title, id, abstract, journal, year, linkScienceDirect, reference, ...articleCharacteristics
                    }) => (
                        <Article
                            key={id}
                            id={id}
                            author={authors}
                            title={title}
                            journal={journal}
                            abstract={abstract}
                            reference={reference}
                            link={linkScienceDirect}
                            year={year}
                            articleCharacteristics={articleCharacteristics}
                        />
                    ))
                : <div> Aucun article trouvé </div> }
        </List>
    </div>
);


const mapStateToProps = state => ({
    userRequest: userRequestSelector(state),
    filteredArticles: sortedArticleSelector(state),
    count: countSortedArticlesSelector(state)
    // fieldRequest: userRequestFieldsSelector(state)

});

export default connect(mapStateToProps)(StandardLayout(SearchResults, 'Résultat de la recherche'));
