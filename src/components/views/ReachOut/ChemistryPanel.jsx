import React from 'react';
import {
    Grid, Segment, Dropdown, Header
} from 'semantic-ui-react';
import ExtractionChemistry from '../../data/ExtractionDNAChemistry';
import QuantificationChemistry from '../../data/QuantificationDNAChemistry';
import AmplificationAutosomChemistry from '../../data/AmplificationAutoChemistry';
import AmplificationYChemistry from '../../data/AmplificationYChemistry';
import SalivaTest from '../../data/SalivaTest';
import BloodTest from '../../data/BloodTest';
import SpermTest from '../../data/SpermTest';
import './ChemistryPanel.css';

const ChemistryPanel = () => (

    <div>
        <div className="title">
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <h2>Chimie</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
        <div className="etapes">
            <Header as="h3">Extraction</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> ADN </Header>
                            <Dropdown
                                fluid
                                selection
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">ARN </Header>
                            <Dropdown
                                fluid
                                selection
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Concentration </Header>
                            <Dropdown
                                fluid
                                selection
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />
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
                                selection
                                options={QuantificationChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN Y </Header>
                            <Dropdown
                                fluid
                                selection
                                options={QuantificationChemistry}
                                placeholder="Choisir"
                            />

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
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome Y </Header>
                            <Dropdown
                                fluid
                                selection
                                options={AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome X </Header>
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


        <div className="etapes">
            <Header as="h3">Tests Indicatifs</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> Sang </Header>
                            <Dropdown
                                fluid
                                selection
                                options={BloodTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Salive </Header>
                            <Dropdown
                                fluid
                                selection
                                options={SalivaTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Sperme </Header>
                            <Dropdown
                                fluid
                                selection
                                options={SpermTest}
                                placeholder="Choisir"
                            />
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
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Urine </Header>
                            <Dropdown
                                fluid
                                selection
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN de contact </Header>
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

export default ChemistryPanel;
