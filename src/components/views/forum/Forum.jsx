import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import ThemeSelector from './ThemeSelector';
import DiscussionItems from './DiscussionItems';
import StandardLayout from '../../layout/StandardLayout';

const topics = [
    {
        name: 'Astuce pour STRMIX',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat recusandae incidunt cum consequatur necessitatibus facilis commodi? Reiciendis iure autem pariatur tempore libero necessitatibus omnis blanditiis ipsam, sit asperiores illum quasi!',
        icon: 'code',
        color: 'blue'
    },
    {
        name: 'Déterminer un a posteriori, pourquoi?',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat recusandae incidunt cum consequatur necessitatibus facilis commodi? Reiciendis iure autem pariatur tempore libero necessitatibus omnis blanditiis ipsam, sit asperiores illum quasi!',
        icon: 'code branch',
        color: 'yellow'
    },
    {
        name: 'Comment prélever du sang sur du béton?',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat recusandae incidunt cum consequatur necessitatibus facilis commodi? Reiciendis iure autem pariatur tempore libero necessitatibus omnis blanditiis ipsam, sit asperiores illum quasi!',
        icon: 'eye dropper',
        color: 'red'
    },
    {
        name: 'Je n\'arrive pas à change mon profil de laboratoire!!!',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat recusandae incidunt cum consequatur necessitatibus facilis commodi? Reiciendis iure autem pariatur tempore libero necessitatibus omnis blanditiis ipsam, sit asperiores illum quasi!',
        icon: 'bug',
        color: 'grey'
    },
    {
        name: 'Comment faire une boucle dans R?',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat recusandae incidunt cum consequatur necessitatibus facilis commodi? Reiciendis iure autem pariatur tempore libero necessitatibus omnis blanditiis ipsam, sit asperiores illum quasi!',
        icon: 'blue',
        color: 'code'
    }
];

class ForumPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            discussionItems: topics,
            filteredItems: [],
            themes: [
                {
                    name: 'Contamination', selected: false, icon: 'bug', color: 'grey'
                },
                {
                    name: 'Mélanges complexes', selected: false, icon: 'superscript', color: 'olive'
                },
                {
                    name: 'Fluides biologiques', selected: false, icon: 'eye dropper', color: 'red'
                },
                {
                    name: 'Réseaux Bayesien', selected: false, icon: 'code branch', color: 'yellow'
                },
                {
                    name: 'Logiciel', selected: false, icon: 'code', color: 'blue'
                }
            ]
        };
        this.filterItem = this.filterItems.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    filterItems() {
        if (this.state.themes.some(theme => theme.selected)) {
            this.state.filteredItems = this.state.discussionItems.map(
                item => this.state.themes[item.theme].selected
            );
        } else {
            this.state.fitleredItems = this.state.discussionItems;
        }
    }

    toggleTheme(toggleTheme) {
        let newSelection;
        const { themes } = this.state;
        if (toggleTheme) {
            newSelection = themes.map(theme => {
                if (theme.name === toggleTheme.name) {
                    return {
                        name: theme.name,
                        selected: !theme.selected
                    };
                }
                return theme;
            });
            this.setState({
                themes: newSelection
            }, () => this.filterItems());
        } else {
            newSelection = themes.map(theme => ({
                name: theme.name,
                selected: false
            }));
        }
        this.setState({
            themes: newSelection
        }, () => this.filterItems());
    }

    componentWillLoad() {
        this.filterItems();
    }

    render = () => (
        <Grid padded="horizontally">
            <Grid.Row>
                <ThemeSelector
                    themes={this.state.themes}
                />
            </Grid.Row>
            <Grid.Row>
                <Header as="h2">
                    {'Discussions pertinentes'}
                </Header>
            </Grid.Row>
            <Grid.Row>
                <Segment basic>
                    <DiscussionItems discussionItems={this.state.discussionItems} />
                </Segment>
            </Grid.Row>
        </Grid>
    )
}

export default StandardLayout(ForumPage, 'Rechercher dans le forum');
