import React, { Component } from 'react';

import {
    Button, Checkbox, Form, Input, Icon, Radio, Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './FormLabUpdate.css';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GeneralInfo from './GeneralInfo';
import GridForm from './GridForm';
import Research from '../PartnerStudy/Research';
import GridFormEquipment from './GridFormEquipment';
import StandardLayout from '../../layout/StandardLayout';


import * as actionCreators from '../../../store/actions/actionCreators';

class FormLabUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.profile,
            activeMode: props.activeMode
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, { value }, stateField) => {
        const stateUpdate = {};
        stateUpdate[stateField] = value;
        this.setState(stateUpdate);
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
                        <Research />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column fluid>
                        <Form>
                            <Form.Field label="Intérêt de collaboration sur un de vos thèmes" />
                            <Form.Field>
                                <Radio
                                    label="Oui pour un projet de développement"
                                    name="SameTheme"
                                    value="developpement"
                                    checked={this.state.same === 'developpement'}
                                    onChange={this.handleSame}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label="Oui pour un projet de recherche"
                                    name="SameTheme"
                                    value="recherche"
                                    checked={this.state.same === 'recherche'}
                                    onChange={this.handleSame}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label="Oui pour un projet de validation"
                                    name="SameTheme"
                                    value="validation"
                                    checked={this.state.same === 'validation'}
                                    onChange={this.handleSame}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label="Non"
                                    name="SameTheme"
                                    value="non"
                                    checked={this.state.same === 'non'}
                                    onChange={this.handleSame}
                                />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column fluid>
                        <Form>
                            <Form.Field label="Intérêt de collaboration sur un autre thème que les votres" />
                            <Form.Field>
                                <Radio
                                    label="Oui pour un projet de développement"
                                    name="DifferentTheme"
                                    value="developpement"
                                    checked={this.state.different === 'developpement'}
                                    onChange={this.handleDifferent}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label="Oui pour un projet de recherche"
                                    name="DifferentTheme"
                                    value="recherche"
                                    checked={this.state.different === 'recherche'}
                                    onChange={this.handleDifferent}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label="Oui pour un projet de validation"
                                    name="DifferentTheme"
                                    value="validation"
                                    checked={this.state.different === 'validation'}
                                    onChange={this.handleDifferent}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label="Non"
                                    name="DifferentTheme"
                                    value="non"
                                    checked={this.state.different === 'non'}
                                    onChange={this.handleDifferent}
                                />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row columns={1}>
                    <h2>Chimie</h2>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column fluid>
                        <GridForm

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
                            label="Informations visibles pour les autres laboratoires. Trouver plus facile des partenaires d'étude ou des renseignements sur des technologies"
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1}>
                    <Grid.Column fluid>
                        <Button color="blue" size="large" as={Link} to="/logo">Enregistrer les modifications</Button>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        );
    }
}


FormLabUpdate.propTypes = {
    profile: PropTypes.object.isRequired,
    activeMode: PropTypes.string
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
