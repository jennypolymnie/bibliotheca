import React, { Component } from 'react'
import _ from 'lodash'
import { Search, Grid, Header } from 'semantic-ui-react'


const BdArticles = [
    { id: 1, authors: 'Jenny', title: 'Identification des taches de sang', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International' },
    { id: 2, authors: 'Andrew', title: 'Un nouveau robot pour la génétique forensique', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International' },
    { id: 3, authors: 'Diana', title: 'Des nouveaux DIP STR', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International' },
    { id: 4, authors: 'Gabriel', title: 'Une nouvelle méthode de détection', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International' },
    { id: 5, authors: 'Paul', title: 'La nouvelle application en génétique', abstract: 'Sang', journal: 'Forensic Science International', link: 'Forensic Science International' },
]

class SearchPage extends Component {

    componentWillMount() { this.resetComponent() }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(BdArticles, isMatch),
            })
        }, 300)
    }

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push('/reviewForm');
    }

    render() {
        const { isLoading, value, results } = this.state

        return (

            <div>
            <div>
            <Header as='h1'>Rechercher un article</Header>
            </div>

            <Grid>
                <Grid.Column color='blue' width={10}>
                    <form onSubmit={this.handleSubmit}>
                        <Search
                            size='massive'
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
            </Grid>
            </div>
        )
    }
}

export default SearchPage