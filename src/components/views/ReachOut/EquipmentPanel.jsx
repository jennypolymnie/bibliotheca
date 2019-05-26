import React from 'react';
import {
    Grid, Header, Segment, Dropdown
} from 'semantic-ui-react';
import AdhesiveTapes from '../../data/AdhesiveTapes';
import Swabs from '../../data/Swabs';
import NucleicCards from '../../data/NucleicCards';
import ExtractionDNADevices from '../../data/ExtractionDNADevices';
import './EquipmentPanel.css';
import CapillaryElectrophoresisDevices from '../../data/CapillaryElectrophoresisDevices';
import NextGenerationSequencers from '../../data/NextGenerationSequencers';
import LightSources from '../../data/LightSources';
import QuantificationDevices from '../../data/QuantificationDevices';
import ThermalCycler from '../../data/ThermalCycler';

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
            <Header as="h3">Systèmes optiques</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={LightSources}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>

        <div className="equipment">
            <Header as="h3">Moyens de prélèvement</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> Ecouvillons </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={Swabs}
                                placeholder="Choisir"
                            />

                        </Grid.Column>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> Adhésifs </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={AdhesiveTapes}
                                placeholder="Choisir"
                            />

                        </Grid.Column>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> Carte </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={NucleicCards}
                                placeholder="Choisir"
                            />
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Segment>
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
                                search
                                clearable
                                options={ExtractionDNADevices}
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
                                search
                                clearable
                                options={QuantificationDevices}
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
                                search
                                clearable
                                options={ThermalCycler}
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
                                search
                                clearable
                                options={CapillaryElectrophoresisDevices}
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
                                search
                                clearable
                                options={NextGenerationSequencers}
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
