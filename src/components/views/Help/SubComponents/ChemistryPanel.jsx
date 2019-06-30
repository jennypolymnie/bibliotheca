import React from 'react';
import {
    Grid, Segment, Dropdown, Header
} from 'semantic-ui-react';
import ExtractionDNAChemistry from '../../../data/ExtractionDNAChemistry';
import ExtractionRNAChemistry from '../../../data/ExtractionRNAChemistry';
import BisulfiteConversionChemistry from '../../../data/BisulfiteConversionChemistry';
import QuantificationAutosomalChemistry from '../../../data/QuantificationAutosomalChemistry';
import QuantificationYChemistry from '../../../data/QuantificationYChemistry';
import AmplificationAutoChemistry from '../../../data/AmplificationAutoChemistry';
import AmplificationYChemistry from '../../../data/AmplificationYChemistry';
import AmplificationXChemistry from '../../../data/AmplificationXChemistry';
import SalivaTest from '../../../data/SalivaTest';
import BloodTest from '../../../data/BloodTest';
import SpermTest from '../../../data/SpermTest';
import UrinaTest from '../../../data/UrinaTest';
import VaginalTest from '../../../data/VaginalTest';
import ContactTest from '../../../data/ContactTest';

import '../stylesheets/ChemistryPanel.css';

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
            <Header as="h3">Tests Indicatifs</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center"> Sang </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={BloodTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Salive </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={SalivaTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Sperme </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
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
                                search
                                clearable
                                options={VaginalTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Urine </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={UrinaTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN de contact </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={ContactTest}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

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
                                search
                                clearable
                                options={ExtractionDNAChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">ARN </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={ExtractionRNAChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Conversion bisulfite </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={BisulfiteConversionChemistry}
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
                                search
                                clearable
                                options={QuantificationAutosomalChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN Y </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={QuantificationYChemistry}
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
                                search
                                clearable
                                options={AmplificationAutoChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome Y </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome X </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={AmplificationXChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </div>
        <div className="etapes">
            <Header as="h3">Séquençage</Header>
            <Segment color="yellow" fluid>
                <Grid columns={3} divided>
                    <Grid.Row>

                        <Grid.Column fluid>
                            <Header as="h4" textAlign="center">Electrophorèse capillaire </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={AmplificationAutoChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Séquençage Sanger </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Séquençage Nouvelle Génération </Header>
                            <Dropdown
                                fluid
                                selection
                                search
                                clearable
                                options={AmplificationXChemistry}
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
