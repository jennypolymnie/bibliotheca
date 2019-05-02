
import React, { Component } from 'react';
import {
    Input, Checkbox, Dropdown, Grid, Segment, Search, List
} from 'semantic-ui-react';
// import './stylesheets/SearchResults.css';
import CountElement from './NbArticle';
import Article from './Article';
import BdArticles from './BdArticles';
import StandardLayout from '../../layout/StandardLayout';

const options = [
    {
        text: 'Source',
        value: 'source'
    }
];

class SearchResults extends Component {
    render() {
        return (
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
                            <Grid.Column width={4}>
                                <Input label={{ content: 'Nature', color: 'grey' }} placeholder="salive" />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input label={{ content: 'Support', color: 'grey' }} placeholder="mouchoir" />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input label={{ content: 'Concentration', color: 'grey' }} placeholder="<100pg/ul" />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input label={{ content: 'Test', color: 'grey' }} placeholder="RSIDSaliva" />
                            </Grid.Column>
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
                            onClick={this.handleCardClick}
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
    }
}

export default StandardLayout(SearchResults, 'Résultat de la recherche');
