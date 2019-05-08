
import React from 'react';
import { connect } from 'react-redux';
import {
    Input, Checkbox, Grid, Segment, List
} from 'semantic-ui-react';
// import './stylesheets/SearchResults.css';
import CountElement from './NbArticle';
import Article from './Article';
import BdArticles from './BdArticles';
import StandardLayout from '../../layout/StandardLayout';
import { userRequestSelector } from '../../../store/selectors/searchResults';

// const options = [
//     {
//         text: 'Source',
//         value: 'source'
//     }
// ];

const SearchResults = ({ userRequest }) => (
    <div className="recherche">
        <Segment secondary>
            <Grid padded="vertically">
                <Grid.Row>
                    <Grid.Column width={4}>
                        {/* <Search placeholder="mots clés" /> */}
                    </Grid.Column>
                    <Grid.Column width={8}>
                        {/* <Dropdown label="Type" value="source" options={options} basic as="h3" /> */}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Checkbox toggle label="Utiliser le profil du laboratoire" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {userRequest.map(option => (
                        <Grid.Column width={4}>
                            <Input label={option.label} value={option.value} />
                        </Grid.Column>
                    ))}
                </Grid.Row>
                <Grid.Row>
                    <CountElement name="Nombre d'articles correspondant à votre recherche" count={4} />
                </Grid.Row>
            </Grid>
        </Segment>
        <List relaxed>
            {BdArticles.map(({
                authors, title, id, abstract, journal, year, link, reference, ...otherCharacteristics
            }) => (
                <Article
                    key={id}
                    author={authors}
                    title={title}
                    journal={journal}
                    abstract={abstract}
                    reference={reference}
                    year={year}
                    link={link}
                    // onClick={this.handleCardClick}
                    otherCharacteristics={otherCharacteristics}
                    // nature="salive"
                    // concentration="<100pg/ul"
                    // test="RSIDSaliva"
                    // support="mouchoir"
                />
            ))
            }
        </List>

    </div>
);

const mapStateToProps = state => ({
    userRequest: userRequestSelector(state)
});

export default connect(mapStateToProps)(StandardLayout(SearchResults, 'Résultat de la recherche'));
