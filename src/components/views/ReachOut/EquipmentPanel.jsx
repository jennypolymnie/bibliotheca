import React from 'react';
import {
    Grid, Header, Segment, Dropdown
} from 'semantic-ui-react';

import AmplificationAutosomChemistry from '../../data/AmplificationAutosomChemistry';
import './EquipmentPanel.css';

const EquipmentPanel = () => (

    <div>
        <div className="title">
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <h2>Equipement</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className="equipment">
            <Header as="h3">Robot Extraction</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>


        <div className="equipment">
            <Header as="h3">Quantification</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>


        <div className="equipment">
            <Header as="h3">Bloc Chauffant</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>

        <div className="equipment">
            <Header as="h3">Electrophorèse capillaire</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>

        <div className="equipment">
            <Header as="h3">Séquenceur nouvelle génération</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    </div>
);

export default EquipmentPanel;
