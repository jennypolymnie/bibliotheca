import React from 'react';
import {
    Grid, Header, Segment, Dropdown, Icon
} from 'semantic-ui-react';

import ThermalCycler from '../../../data/ThermalCycler';
import QuantificationDevices from '../../../data/QuantificationDevices';
import CapillaryElectrophoresisDevices from '../../../data/CapillaryElectrophoresisDevices';
import NextGenerationSequencers from '../../../data/NextGenerationSequencers';

const GridFormEquipment = () => (

    <div>
        <div className="equipment">
            <Header as="h4">Robot Extraction</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                value="Autre"
                                options={[{
                                    id: 1, name: 'Autre', value: 'Autre', text: 'Autre'
                                }]}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>


        <div className="equipment">
            <Header as="h4">Quantification</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                value="7500FastRealTimePCRSystem"
                                options={QuantificationDevices}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>


        <div className="equipment">
            <Header as="h4">Bloc Chauffant</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                value="VeritiThermalCycler"
                                options={ThermalCycler}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>

        <div className="equipment">
            <Header as="h4">Electrophorèse capillaire</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                value="3500xlGeneticAnalyzer"
                                options={CapillaryElectrophoresisDevices}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>

        <div className="equipment">
            <Header as="h4">Séquenceur nouvelle génération</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center" />
                            <Dropdown
                                fluid
                                selection
                                value="IonGeneStudioS5"
                                options={NextGenerationSequencers}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center" />
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    </div>
);

export default GridFormEquipment;
