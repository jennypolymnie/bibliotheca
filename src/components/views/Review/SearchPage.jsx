import React, { Component } from 'react';
import _ from 'lodash';
import {
    Search, Grid, Header, Segment, List
} from 'semantic-ui-react';
import CountElement from '../search-results/NbArticle';
import ArticleShort from '../search-results/ArticleShort';
import BdArticles from '../search-results/BdArticles';
import './SearchPage.css';

class SearchPage extends Component {
    componentWillMount() { this.resetComponent(); }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.title);

            this.setState({
                isLoading: false,
                results: _.filter(BdArticles, isMatch)
            });
        }, 300);
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push('/reviewForm');
    }

    render() {
        const { isLoading, value, results } = this.state;

        return (

            <div>
                <div className="title-page">
                    <Header as="h1">Rechercher un article</Header>
                </div>
                <Segment secondary>
                    <Grid padded="vertically">
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <form onSubmit={this.handleSubmit}>
                                    <Search
                                        size="large"
                                        placeholder="Titre de l'article"
                                        input={{ fluid: true }}
                                        loading={isLoading}
                                        onResultSelect={this.handleResultSelect}
                                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                                        results={results}
                                        value={value}
                                        {...this.props}
                                    />
                                </form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <List relaxed>
                    {BdArticles.map(({
                        authors, title, id, abstract, journal, link
                    }) => (
                        <ArticleShort key={id} author={authors} title={title} journal={journal} abstract={abstract} link={link} />
                    ))
                    }
                </List>
            </div>
        );
    }
}

export default SearchPage;
