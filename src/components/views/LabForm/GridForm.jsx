import React from 'react';
import {
    Grid, Segment, Dropdown, Header, Icon
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import ExtractionChemistry from '../../data/ExtractionChemistry';
// import QuantificationChemistry from '../../data/QuantificationChemistry';
// import AmplificationAutosomChemistry from '../../data/AmplificationAutoChemistry';
// import AmplificationYChemistry from '../../data/AmplificationYChemistry';
// import SalivaTest from '../../data/SalivaTest';
// import BloodTest from '../../data/BloodTest';
// import SpermTest from '../../data/SpermTest';
import './GridForm.css';

const GridForm = props => (

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
                                selection
                                options={props.ExtractionDNAChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">ARN </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.ExtractionRNAChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Concentration </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.ConcentrationChemistry}
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
                                selection
                                options={props.QuantificationDNAChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN Y </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.QuantificationYChemistry}
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
                                selection
                                options={props.AmplificationAutoChemistry}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome Y </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center">Chromosome X </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.AmplificationXChemistry}
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
                                selection
                                options={props.BloodTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Salive </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.SalivaTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Sperme </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.SpermTest}
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
                                selection
                                options={props.VaginalTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> Urine </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.UrinaTest}
                                placeholder="Choisir"
                            />

                        </Grid.Column>
                        <Grid.Column>
                            <Header as="h4" textAlign="center"> ADN de contact </Header>
                            <Dropdown
                                fluid
                                selection
                                options={props.ContactTest}
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

GridForm.propTypes = {
    ExtractionDNAChemistry: PropTypes.string,
    ExtractionRNAChemistry: PropTypes.string,
    ConcentrationChemistry: PropTypes.string,
    QuantificationDNAChemistry: PropTypes.string,
    QuantificationYChemistry: PropTypes.string,
    AmplificationAutoChemistry: PropTypes.string,
    AmplificationYChemistry: PropTypes.string,
    AmplificationXChemistry: PropTypes.string,
    BloodTest: PropTypes.string,
    SalivaTest: PropTypes.string,
    UrinaTest: PropTypes.string,
    VaginalTest: PropTypes.string,
    ContactTest: PropTypes.string,
    SpermTest: PropTypes.string


};
GridForm.defaultProps = {
    ExtractionDNAChemistry: '',
    ExtractionRNAChemistry: '',
    ConcentrationChemistry: '',
    QuantificationDNAChemistry: '',
    QuantificationYChemistry: '',
    AmplificationAutoChemistry: '',
    AmplificationYChemistry: '',
    AmplificationXChemistry: '',
    BloodTest: '',
    SalivaTest: '',
    UrinaTest: '',
    VaginalTest: '',
    ContactTest: '',
    SpermTest: ''
};

export default GridForm;
