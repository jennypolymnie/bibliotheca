import React from 'react';
import {
    Grid, Select, Header, Segment, Dropdown, Icon
} from 'semantic-ui-react';

import AmplificationAutosomChemistry from './AmplificationAutosomChemistry';
import './GridFormEquipment.css';

const GridFormEquipment = () => (

    <div>
        <div className="equipment">
            <Header as="h3">Robot Extraction</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as='h4' textAlign='center'> </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
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
                            <Header as='h4' textAlign='center'> </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
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
                            <Header as='h4' textAlign='center'> </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
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
                            <Header as='h4' textAlign='center'> </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
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
                            <Header as='h4' textAlign='center'> </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
                                Ajouter un élément
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <Header as='h4' textAlign='center'> </Header>
                            <p>
                                <Icon color='yellow' name='plus circle' />
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
