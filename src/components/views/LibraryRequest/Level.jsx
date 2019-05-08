import React from 'react';
import {
    Tab, Grid, Button, Header, Segment, Dropdown
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hierarchy from '../../data/Hierarchy';
import OptionsRequestPreeval from '../../data/OptionsRequestPreeval';
import OptionsRequest from '../../data/OptionsRequest';

const generateList = (id, selectOption) => OptionsRequest
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
                onChange={(event, data) => selectOption(filteredOption.name, data.value)}
                options={filteredOption.options}
            />
        </Segment>
    ));

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
                onChange={(event, data) => selectOption(filteredOption.name, data.value)}
                options={filteredOption.options}
            />
        </Segment>
    ));

const Preevaluation = ({ selectOption, submitRequest }) => (
    <Grid stretched>
        <Grid.Column padded stretched>
            <Segment color="yellow" raised container className="search_option">
                {generateListPreeval(selectOption)}
                <Grid.Row stretched verticalAlign="bottom" className="search_button">
                    <Button
                        color="blue"
                        size="large"
                        as={Link}
                        to="/articles"
                        onClick={() => {
                            const options = OptionsRequestPreeval
                                .map(filteredOption => filteredOption.name);
                            submitRequest(options);
                        }}
                    >
                                Envoyez la requête
                    </Button>
                </Grid.Row>
            </Segment>
        </Grid.Column>
    </Grid>
);

// const Preevaluation = ({ selectOption, submitRequest }) => (
//     <Segment color="yellow" raised container>
//         <Grid>
//             <Grid.Row columns={3}>
//                 <Grid.Column>
//                     <Header as="h4" textAlign="center"> Nature de la trace </Header>
//                     <Dropdown
//                         placeholder="Choisir"
//                         fluid
//                         selection
//                         onChange={(event, data) => selectOption(Label, data.value)}
//                         options={StainNature}
//                     />
//                 </Grid.Column>
//                 <Grid.Column>
//                     <Header as="h4" textAlign="center"> Matière du support </Header>
//                     <Dropdown
//                         placeholder="Choisir"
//                         fluid
//                         selection
//                         onChange={(event, data) => selectOption(Label, data.value)}
//                         options={Material}
//                     />
//                 </Grid.Column>
//                 <Grid.Column>
//                     <Header as="h4" textAlign="center"> Support </Header>
//                     <Dropdown
//                         placeholder="Choisir"
//                         fluid
//                         selection
//                         onChange={(event, data) => selectOption(Label, data.value)}
//                         options={StainSupport}
//                     />
//                 </Grid.Column>
//             </Grid.Row>

//             <Grid.Row>
//                 <Grid.Column>
//                     <Button
//                         color="blue"
//                         size="large"
//                         as={Link}
//                         to="/articles"
//                         // onClick={() => {
//                         //     const optionsList = 
//                         //     submitRequest(optionsList);
//                         // }}
//                     >
//                         Envoyez la requête
//                     </Button>
//                 </Grid.Column>
//             </Grid.Row>
//         </Grid>
//     </Segment>

// );


const Data = ({ selectOption, submitRequest }) => (
    <Grid stretched>
        {
            Hierarchy.map(({ name, id }) => (
                <Grid.Column key={id} width={5} padded stretched>
                    <Segment color="yellow" raised container className="search_option">
                        <Header textAlign="center" as="h2">{name}</Header>
                        {generateList(id, selectOption)}
                        <Grid.Row stretched verticalAlign="bottom" className="search_button">
                            <Button
                                color="blue"
                                size="large"
                                as={Link}
                                to="/articles"
                                onClick={() => {
                                    const options = OptionsRequest
                                        .filter(option => option.categories.includes(id))
                                        .map(filteredOption => filteredOption.name);
                                    submitRequest(options);
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

const BayesianNetwork = ({ selectOption, submitRequest }) => (
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
                        onChange={(event, data) => selectOption(Hierarchy.name, data.value)}
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
                        // onClick={() => {
                        //     const options = OptionsRequest
                        //         .map(filteredOption => filteredOption.name);
                        //     submitRequest(options);
                        // }}
                    >
                        Envoyez la requête
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

);

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
    onSubmit: PropTypes.func.isRequired,
    selectOption: PropTypes.func.isRequired,
    submitRequest: PropTypes.func.isRequired
};

export default Level;
