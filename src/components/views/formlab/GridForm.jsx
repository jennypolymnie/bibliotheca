import React from 'react';
import {
    Grid, Select, Segment, Dropdown, Header, Icon
} from 'semantic-ui-react';
import ExtractionChemistry from './ExtractionChemistry';
import QuantificationChemistry from './QuantificationChemistry';
import AmplificationAutosomChemistry from './AmplificationAutosomChemistry';
import AmplificationYChemistry from './AmplificationYChemistry';
import SalivaTest from './SalivaTest';
import BloodTest from './BloodTest';
import SpermTest from './SpermTest';
import './GridForm.css';
import AddNewElement from './AddNewElement';

const GridForm = () => (

    <div>

        <div className="etapes">
            <Header as="h3">Extraction</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> ADN </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">ARN </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Concentration </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>

                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>

                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
        <div className="etapes">
            <Header as="h3">Quantification</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> ADN autosomal </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={QuantificationChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN Y </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={QuantificationChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>

                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>

                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                        <Grid.Column>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>





        <div className="etapes">
            <Header as="h3">Amplification</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center">Autosomal </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome Y </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome X </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>

                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>

                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </div>


        <div className="etapes">
            <Header as="h3">Tests Indicatifs</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> Sang </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={BloodTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Salive </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={SalivaTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Sperme </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>

                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>

                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </div>

        <div className="etapes">
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> Sécrétions vaginales </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Urine </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN de contact </Header>
                            <Dropdown
                                fluid
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>

                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>

                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                <Icon color="yellow" name="plus circle" />
                                Ajouter un kit
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </div>

    </div>
);

export default GridForm;
