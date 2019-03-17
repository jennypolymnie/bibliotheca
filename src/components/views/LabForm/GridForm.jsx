import React from 'react';
import {
    Grid, Segment, Dropdown, Header, Icon
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ChemistryProfile = props => (

    <div>
        <Header as="h3">Extraction</Header>
        <Segment color="yellow" fluid>
            <Grid columns={3} divided>
                <Grid.Row>

                    <Grid.Column fluid>
                        <Header as="h4" textAlign="center"> ADN </Header>
                        {props.extractionDNAChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'extractionDNAChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.extractionDNAChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center">ARN </Header>
                        {props.extractionRNAChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'extractionRNAChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.extractionRNAChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center">Concentration </Header>
                        {props.concentrationChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'concentrationChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.concentrationChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
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


        <Header as="h3">Quantification</Header>
        <Segment color="yellow" fluid>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column fluid>
                        <Header as="h4" textAlign="center"> ADN autosomal </Header>
                        {props.quantificationDNAChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'quantificationDNAChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.quantificationDNAChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center"> ADN Y </Header>
                        {props.quantificationYChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'quantificationYChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.quantificationYChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
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

        <Header as="h3">Amplification</Header>
        <Segment color="yellow" fluid>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column fluid>
                        <Header as="h4" textAlign="center">Autosomal </Header>
                        {props.amplificationAutoChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'amplificationAutoChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.amplificationAutoChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center">Chromosome Y </Header>
                        {props.amplificationYChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'amplificationYChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.amplificationYChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>

                    <Grid.Column>
                        <Header as="h4" textAlign="center">Chromosome X </Header>
                        {props.amplificationXChemistry.map((chemistry, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'amplificationXChemistry', i)}
                                fluid
                                selection
                                value={chemistry}
                                options={props.amplificationXChemistryOptions}
                                placeholder="Choisir"
                            />
                        ))}
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

        <Header as="h3">Tests Indicatifs</Header>
        <Segment color="yellow" fluid>
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column fluid>
                        <Header as="h4" textAlign="center"> Sang </Header>
                        {props.bloodTest.map((test, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'bloodTest', i)}
                                fluid
                                selection
                                value={test}
                                options={props.bloodTestOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center"> Salive </Header>
                        {props.salivaTest.map((test, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'salivaTest', i)}
                                fluid
                                selection
                                value={test}
                                options={props.salivaTestOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center"> Sperme </Header>
                        {/* {props.spermTest.map((test, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'spermTest', i)}
                                fluid
                                selection
                                value={test}
                                options={props.spermTestOptions}
                                placeholder="Choisir"
                            />
                        ))} */}
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

        <Segment color="yellow" fluid>
            <Grid columns={3} divided>
                <Grid.Row>

                    <Grid.Column fluid>
                        <Header as="h4" textAlign="center"> Sécrétions vaginales </Header>
                        {props.vaginalTest.map((test, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'vaginalTest', i)}
                                fluid
                                selection
                                value={test}
                                options={props.vaginalTestOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center"> Urine </Header>
                        {props.urinaTest.map((test, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'urinaTest', i)}
                                fluid
                                selection
                                value={test}
                                options={props.urinaTestOptions}
                                placeholder="Choisir"
                            />
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h4" textAlign="center"> ADN de contact </Header>
                        {props.contactTest.map((test, i) => (
                            <Dropdown
                                onChange={(e, d) => props.onChange(e, d, 'contactTest', i)}
                                fluid
                                selection
                                value={test}
                                options={props.contactTestOptions}
                                placeholder="Choisir"
                            />
                        ))}
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
);

ChemistryProfile.propTypes = {
    extractionDNAChemistry: PropTypes.string,
    extractionDNAChemistryOptions: PropTypes.string,
    extractionRNAChemistry: PropTypes.string,
    extractionRNAChemistryOptions: PropTypes.string,
    concentrationChemistry: PropTypes.string,
    concentrationChemistryOptions: PropTypes.string,
    quantificationDNAChemistry: PropTypes.string,
    quantificationDNAChemistryOptions: PropTypes.string,
    quantificationYChemistry: PropTypes.string,
    quantificationYChemistryOptions: PropTypes.string,
    amplificationAutoChemistry: PropTypes.string,
    amplificationAutoChemistryOptions: PropTypes.string,
    amplificationYChemistry: PropTypes.string,
    amplificationYChemistryOptions: PropTypes.string,
    amplificationXChemistry: PropTypes.string,
    amplificationXChemistryOptions: PropTypes.string,
    bloodTest: PropTypes.arrayOf(PropTypes.string),
    bloodTestOptions: PropTypes.array,
    salivaTest: PropTypes.arrayOf(PropTypes.string),
    salivaTestOptions: PropTypes.array,
    urinaTest: PropTypes.arrayOf(PropTypes.string),
    urinaTestOptions: PropTypes.array,
    vaginalTest: PropTypes.arrayOf(PropTypes.string),
    vaginalTestOptions: PropTypes.array,
    contactTest: PropTypes.arrayOf(PropTypes.string),
    contactTestOptions: PropTypes.array,
    spermTest: PropTypes.arrayOf(PropTypes.string),
    spermTestOptions: PropTypes.array,
    onChange: PropTypes.func.isRequired


};
ChemistryProfile.defaultProps = {
    extractionDNAChemistry: '',
    extractionDNAChemistryOptions: '',
    extractionRNAChemistry: '',
    extractionRNAChemistryOptions: '',
    concentrationChemistry: '',
    concentrationChemistryOptions: '',
    quantificationDNAChemistry: '',
    quantificationDNAChemistryOptions: '',
    quantificationYChemistry: '',
    quantificationYChemistryOptions: '',
    amplificationAutoChemistry: '',
    amplificationAutoChemistryOptions: '',
    amplificationYChemistry: '',
    amplificationYChemistryOptions: '',
    amplificationXChemistry: '',
    amplificationXChemistryOptions: '',
    bloodTest: '',
    bloodTestOptions: '',
    salivaTest: [],
    salivaTestOptions: [],
    urinaTest: '',
    urinaTestOptions: '',
    vaginalTest: '',
    vaginalTestOptions: '',
    contactTest: '',
    contactTestOptions: '',
    spermTest: '',
    spermTestOptions: ''
};

export default ChemistryProfile;
