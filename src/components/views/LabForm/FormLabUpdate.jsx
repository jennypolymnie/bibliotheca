import React, { Component } from 'react';
import {
    Button, Checkbox, Form, Input, Icon, Header, Radio, Grid
} from 'semantic-ui-react';
import './FormLabUpdate.css';
import { Link } from 'react-router-dom';
import GridForm from './GridForm';
import Research from '../PartnerStudy/Research';
import GridFormEquipment from './GridFormEquipment';
import StandardLayout from '../../layout/StandardLayout';
import GeneralInfo from './GeneralInfo';


class FormLabUpdate extends Component {
    state = {}

    handleSame = (e, { value }) => this.setState({
        same: value
    })

    handleDifferent = (e, { value }) => this.setState({
        different: value
    })


    render() {
        return (
            <Grid padded="false">
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <h2>Informations générales</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column fluid>
                        <Form>
                            <Form.Group grouped widths="equal">
                                <Form.Field
                                    required
                                    control={Input}
                                    label="Nom du laboratoire"
                                    placeholder="Nom du laboratoire"
                                />
                                <Form.Field
                                    required
                                    control={Input}
                                    label="Prénom du directeur du laboratoire"
                                    placeholder="Prénom"
                                />
                                <Form.Field
                                    required
                                    control={Input}
                                    label="Nom du directeur du laboratoire"
                                    placeholder="Nom"
                                />
                                <Form.Field
                                    required
                                    control={Input}
                                    label="Pays"
                                    placeholder="Pays"
                                />
                                <Form.Field
                                    control={Input}
                                    label="Site web"
                                    placeholder="Site web"
                                />
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Form>
                            <Form.Group grouped>
                                <Form.Field
                                    control={Input}
                                    label="Email du contact technique"
                                    placeholder="email technique"
                                    type="email"
                                />
                                <Form.Field
                                    control={Input}
                                    label="Email du contact interprétation"
                                    placeholder="email interpretation"
                                    type="email"
                                />
                            </Form.Group>
                        </Form>
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
                        <GridForm />
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

export default StandardLayout(FormLabUpdate, 'Profil du laboratoire');
