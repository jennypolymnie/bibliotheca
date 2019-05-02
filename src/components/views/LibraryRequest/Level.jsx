import React from 'react';
import {
    Tab, Grid, Button, Header, Segment, Dropdown
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Hierarchy from '../../data/Hierarchy';
import OptionsRequest from '../../data/OptionsRequest';
import StainNature from '../../data/StainNature';
import Material from '../../data/Material';
import StainSupport from '../../data/StainSupport';
import OptionsPreevaluation from '../../data/OptionsPreevaluation';

const generateList = id => OptionsRequest
    .filter(option => option.categories.includes(id))
    .map(filteredOption => (
        <Segment basic className="search_option_field">
            <Header sub>
                {filteredOption.name}
            </Header>
            <Dropdown
                placeholder="Choisir"
                fluid
                selection
                options={filteredOption.options}
            />
        </Segment>
    ));

const Preevaluation = () => (
    <Segment color="yellow" raised container>
        <Grid>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Header as="h4" textAlign="center"> Nature de la trace </Header>
                    <Dropdown
                        placeholder="Choisir"
                        fluid
                        selection
                        options={StainNature}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4" textAlign="center"> Matière du support </Header>
                    <Dropdown
                        placeholder="Choisir"
                        fluid
                        selection
                        options={Material}
                    />
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4" textAlign="center"> Support </Header>
                    <Dropdown
                        placeholder="Choisir"
                        fluid
                        selection
                        options={StainSupport}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <Header as="h4" textAlign="center" />
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4" textAlign="center" />
                </Grid.Column>
                <Grid.Column>
                    <Header as="h4" textAlign="center"> Options </Header>
                    <Dropdown
                        placeholder="Choisir"
                        fluid
                        selection
                        options={OptionsPreevaluation}
                    />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Button
                        color="blue"
                        size="large"
                        as={Link}
                        to="/articles"
                    >
                        Envoyez la requête
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

);


const Data = () => (
    <Grid stretched>
        {
            Hierarchy.map(({ name, id }) => (
                <Grid.Column key={id} width={5} padded stretched>
                    <Segment color="yellow" raised container className="search_option">
                        <Header textAlign="center" as="h2">{name}</Header>
                        {generateList(id)}
                        <Grid.Row stretched verticalAlign="bottom" className="search_button">
                            <Button
                                color="blue"
                                size="large"
                                as={Link}
                                to="/articles"
                            >
                                Envoyez la requête
                            </Button>
                        </Grid.Row>
                    </Segment>
                </Grid.Column>
            ))
        }
    </Grid>
);

const ReseauxBayesien = () => (
    <Segment color="yellow" raised container>
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Header as="h4" textAlign="center"> Niveau </Header>
                    <Dropdown
                        placeholder="Choisir"
                        fluid
                        selection
                        options={Hierarchy}
                    />
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Button
                        color="blue"
                        size="large"
                        as={Link}
                        to="/articles"
                    >
                        Envoyez la requête
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

);


const panes = [
    {
        menuItem: 'Pré évaluation',
        render: () => (
            <Tab.Pane as="Container">
                <Preevaluation />
            </Tab.Pane>
        )
    },
    {
        menuItem: 'Données',
        render: () => (
            <Tab.Pane as="Container">
                <Data />
            </Tab.Pane>
        )
    },
    {
        menuItem: 'Réseaux Bayesien',
        render: () => (
            <Tab.Pane as="Container">
                <ReseauxBayesien />
            </Tab.Pane>
        )
    }
];


const Level = () => (
    <Tab grid={{ paneWidth: 14, tabWidth: 2 }} menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
);

export default Level;
