import React, { Component } from 'react';

import {
    Button, Checkbox, Icon, Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './FormLabUpdate.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import omit from 'lodash/omit';
import GeneralInfo from './GeneralInfo';
import ChemistryProfile from './GridForm';
import ResearchProfile from './ResearchProfile';
import GridFormEquipment from './GridFormEquipment';
import StandardLayout from '../../layout/StandardLayout';
import OneOfYourTheme from './OneOfYourTheme';
import AnotherTheme from './AnotherTheme';

import * as actionCreators from '../../../store/actions/actionCreators';

class FormLabUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.profile,
            activeMode: props.activeMode
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.handleResearchThemeChange = this.handleResearchThemeChange.bind(this);
    }

    handleDropdownChange = (e, { value }, stateField, index) => {
        this.setState(state => {
            const stateUpdate = {};
            const allExistingDropdowns = state[stateField];
            stateUpdate[stateField] = [
                ...allExistingDropdowns.slice(0, index),
                value,
                ...allExistingDropdowns.slice(index + 1)
            ];
            return stateUpdate;
        });
    }

    handleChange = (e, { value }, stateField) => {
        const stateUpdate = {};
        stateUpdate[stateField] = value;
        this.setState(stateUpdate);
    }

    handleResearchThemeChange(e, { checked }, theme) {
        this.setState(prevState => {
            const stateUpdate = {};
            stateUpdate[theme] = checked;
            const updateResearchThemes = {
                researchThemes: {
                    ...prevState.researchThemes,
                    ...stateUpdate
                }
            };
            console.log(updateResearchThemes);
            return updateResearchThemes;
        });
    }


    handleSame = (e, { value }) => this.setState({
        same: value
    });

    handleDifferent = (e, { value }) => this.setState({
        different: value
    });


    render() {
        return (
            <Grid padded="false">
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <h2>Informations générales</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <GeneralInfo
                            onChange={this.handleChange}
                            labName={this.state.labName}
                            website={this.state.website}
                            lastName={this.state.lastName}
                            firstName={this.state.firstName}
                            technicalEmail={this.state.technicalEmail}
                            interpretationEmail={this.state.interpretationEmail}
                            country={this.state.country}
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <div className="research-title">
                            <div className="research">
                                <h2>Axes de recherche</h2>
                            </div>
                            <div>
                                <Button basic circular color="darkgrey" icon as={Link} to="/articles">
                                    <Icon size="large" name="question circle" />
                                </Button>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column fluid>
                        <ResearchProfile
                            onChange={this.handleResearchThemeChange}
                            researchThemes={this.state.researchThemes}
                            researchThemesOptions={this.state.researchThemesOptions}
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column fluid>
                        <OneOfYourTheme />
                    </Grid.Column>
                    <Grid.Column fluid>
                        <AnotherTheme />
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={1}>
                    <h2>Chimie</h2>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column fluid>
                        <ChemistryProfile
                            onChange={this.handleDropdownChange}
                            extractionDNAChemistry={this.state.extractionDNAChemistry}
                            extractionRNAChemistry={this.state.extractionRNAChemistry}
                            concentrationChemistry={this.state.concentrationChemistry}
                            quantificationAutosomalChemistry={this.state.quantificationAutosomalChemistry}
                            quantificationYChemistry={this.state.quantificationYChemistry}
                            amplificationAutoChemistry={this.state.amplificationAutoChemistry}
                            amplificationYChemistry={this.state.amplificationYChemistry}
                            amplificationXChemistry={this.state.amplificationXChemistry}
                            extractionDNAChemistryOptions={this.state.extractionDNAChemistryOptions}
                            extractionRNAChemistryOptions={this.state.extractionRNAChemistryOptions}
                            concentrationChemistryOptions={this.state.concentrationChemistryOptions}
                            quantificationAutosomalChemistryOptions={this.state.quantificationAutosomalChemistryOptions}
                            quantificationYChemistryOptions={this.state.quantificationYChemistryOptions}
                            amplificationAutoChemistryOptions={this.state.amplificationAutoChemistryOptions}
                            amplificationYChemistryOptions={this.state.amplificationYChemistryOptions}
                            amplificationXChemistryOptions={this.state.amplificationXChemistryOptions}
                            bloodTestOptions={this.state.bloodTestOptions}
                            bloodTest={this.state.bloodTest}
                            salivaTestOptions={this.state.salivaTestOptions}
                            salivaTest={this.state.salivaTest}
                            urinaTestOptions={this.state.urinaTestOptions}
                            urinaTest={this.state.urinaTest}
                            vaginalTestOptions={this.state.vaginalTestOptions}
                            vaginalTest={this.state.vaginalTest}
                            contactTestOptions={this.state.contactTestOptions}
                            contactTest={this.state.contactTest}
                            spermTestOptions={this.state.spermTestOptions}
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <h2>Equipement</h2>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column fluid>
                        <GridFormEquipment />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <Grid.Column fluid>

                        <Checkbox
                            toggle
                            label="Informations visibles pour les autres laboratoires. Trouver plus facilement des partenaires d'étude ou des renseignements sur des technologies"
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <Grid.Column fluid>
                        <Button onClick={() => this.props.saveProfile(omit(this.state, ['activeMode']))} color="blue" size="large">Enregistrer les modifications</Button>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}


FormLabUpdate.propTypes = {
    profile: PropTypes.object.isRequired,
    activeMode: PropTypes.string,
    saveProfile: PropTypes.func.isRequired
};

FormLabUpdate.defaultProps = {
    activeMode: 'view'
};


function mapStateToProps(state) {
    return {
        profile: state.profile
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


const FormLabUpdateConnect = connect(mapStateToProps, mapDispatchToProps)(FormLabUpdate);

export default StandardLayout(FormLabUpdateConnect, 'Profil du laboratoire');
