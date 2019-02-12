import React from 'react';
import {
    Grid, Header, Segment, Dropdown, Icon
} from 'semantic-ui-react';

import AmplificationAutosomChemistry from './AmplificationAutosomChemistry';
import './GridFormEquipment.css';

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
                                options={AmplificationAutosomChemistry}
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
                                options={AmplificationAutosomChemistry}
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
                                options={AmplificationAutosomChemistry}
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
                                options={AmplificationAutosomChemistry}
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
                                options={AmplificationAutosomChemistry}
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
