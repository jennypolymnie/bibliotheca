import React from 'react';
import {
    Tab, Grid, Button, Header, Segment, Dropdown
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hierarchy from '../../data/Hierarchy';
import BayesianNetworkCategory from '../../data/BayesianNetworkCategory';
import OptionsRequestPreeval from '../../data/OptionsRequestPreeval';
import OptionsRequestData from '../../data/OptionsRequest';
// import OptionsRequestBayesian from '../../data/OptionsRequestBayesian';

const generateListPreeval = selectOption => OptionsRequestPreeval
    .map(filteredOption => (
        <Segment basic className="search_option_field">
            <Header sub>
                {filteredOption.name}
            </Header>
            <Dropdown
                placeholder="Choisir"
                fluid
                selection
                search
                clearable
                onChange={(event, data) => selectOption(filteredOption.name, data.value, filteredOption.id)}
                options={filteredOption.options}
            />
        </Segment>
    ));

const generateListData = (id, selectOption) => OptionsRequestData
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
                search
                clearable
                onChange={(event, data) => selectOption(filteredOption.name, data.value, filteredOption.id)}
                options={filteredOption.options}
            />
        </Segment>
    ));

const Preevaluation = ({ selectOption, submitRequest }) => (
    <Grid stretched>
        <Grid.Column width={5} padded stretched>
            <Segment color="yellow" raised container className="search_option">
                <Header textAlign="center" as="h2">Évaluation</Header>
                {generateListPreeval(selectOption)}
                <Grid.Row stretched verticalAlign="bottom" className="search_button">
                    <Button
                        color="blue"
                        size="large"
                        as={Link}
                        to="/articles"
                        floated="right"
                        onClick={() => {
                            const options = OptionsRequestPreeval
                                .map(filteredOption => filteredOption.name);
                            submitRequest(options, 'preevaluation');
                        }}
                    >
                        Envoyez la requête
                    </Button>
                </Grid.Row>
            </Segment>
        </Grid.Column>
    </Grid>
);

Preevaluation.propTypes = {
    selectOption: PropTypes.func.isRequired,
    submitRequest: PropTypes.func.isRequired
};

const Data = ({ selectOption, submitRequest }) => (
    <Grid stretched>
        {
            Hierarchy.map(({ name, id }) => (
                <Grid.Column key={id} width={5} padded stretched>
                    <Segment color="yellow" raised container className="search_option">
                        <Header textAlign="center" as="h2">{name}</Header>
                        {generateListData(id, selectOption)}
                        <Grid.Row stretched verticalAlign="bottom" className="search_button">
                            <Button
                                color="blue"
                                size="large"
                                as={Link}
                                to="/articles"
                                onClick={() => {
                                    const options = OptionsRequestData
                                        .filter(option => option.categories.includes(id))
                                        .map(filteredOption => filteredOption.name);
                                    submitRequest(options, id, 'data');
                                }}
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

Data.propTypes = {
    selectOption: PropTypes.func.isRequired,
    submitRequest: PropTypes.func.isRequired
};

const BayesianNetwork = ({ selectOption, submitRequest }) => (
    <Grid stretched>
        {
            BayesianNetworkCategory.map(({ name, id }) => (
                <Grid.Column key={id} width={5} padded stretched>
                    <Segment color="yellow" raised container className="search_option">
                        <Header textAlign="center" as="h2">{name}</Header>
                        {generateListData(id, selectOption)}
                        <Grid.Row stretched verticalAlign="bottom" className="search_button">
                            <Button
                                color="blue"
                                size="large"
                                as={Link}
                                to="/articles"
                                onClick={() => {
                                    const options = OptionsRequestData
                                        .filter(option => option.categories.includes(id))
                                        .map(filteredOption => filteredOption.name);
                                    submitRequest(options, id, 'bayesian network');
                                }}
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

BayesianNetwork.propTypes = {
    selectOption: PropTypes.func.isRequired,
    submitRequest: PropTypes.func.isRequired
};

const Level = ({ selectOption, submitRequest }) => (
    <Tab
        grid={{ paneWidth: 14, tabWidth: 2 }}
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={[
            {
                menuItem: 'Pré évaluation',
                render: () => (
                    <Tab.Pane as="Container">
                        <Preevaluation
                            selectOption={selectOption}
                            submitRequest={submitRequest}
                        />
                    </Tab.Pane>
                )
            },
            {
                menuItem: 'Données',
                render: () => (
                    <Tab.Pane as="Container">
                        <Data
                            selectOption={selectOption}
                            submitRequest={submitRequest}
                        />
                    </Tab.Pane>
                )
            },
            {
                menuItem: 'Réseaux Bayesien',
                render: () => (
                    <Tab.Pane as="Container">
                        <BayesianNetwork
                            selectOption={selectOption}
                            submitRequest={submitRequest}
                        />
                    </Tab.Pane>
                )
            }
        ]}
    />
);

Level.propTypes = {
    selectOption: PropTypes.func.isRequired,
    submitRequest: PropTypes.func.isRequired
};

export default Level;
