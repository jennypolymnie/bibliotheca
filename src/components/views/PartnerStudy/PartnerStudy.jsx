import React, { Component } from 'react';
import {
    Button, Form, Radio, Input, Header, Grid, Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './PartnerStudy.css';
import Research from './Research';


class PartnerStudy extends Component {
    state = {}

    handlePays = (e, { value }) => this.setState({
        pays: value
    })

    handleProject = (e, { value }) => this.setState({
        project: value
    })

    render() {
        return (
            <div className="PartnerStudy">

                <div>
                    <Header as="h1"> Trouver un partenaire d'étude </Header>
                </div>

                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Form>
                                <Form.Group grouped widths="equal">
                                    <Form.Field
                                        required
                                        control={Input}
                                        label="Titre de votre projet"
                                        placeholder="Titre"
                                    />
                                    <Form.Field
                                        required
                                        control={Input}
                                        label="Email de la personne de contact pour ce projet"
                                        placeholder="Email"
                                    />
                                </Form.Group>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Form>
                                <Form.Field label="Même pays que le votre?" />
                                <Form.Field>
                                    <Radio
                                        label="Oui"
                                        name="radioGroup"
                                        value="oui"
                                        checked={this.state.pays === 'oui'}
                                        onChange={this.handlePays}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label="Non"
                                        name="radioGroup"
                                        value="non"
                                        checked={this.state.pays === 'non'}
                                        onChange={this.handlePays}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label="Sans importance"
                                        name="radioGroup"
                                        value="sansimportance"
                                        checked={this.state.pays === 'sansimportance'}
                                        onChange={this.handlePays}
                                    />
                                </Form.Field>
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

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Form>
                                <Form.Field label="Il s'agit d'un projet de:" />
                                <Form.Field>
                                    <Radio
                                        label="Développement"
                                        name="ProjetGroup"
                                        value="developpement"
                                        checked={this.state.project === 'developpement'}
                                        onChange={this.handleProject}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label="Validation"
                                        name="ProjetGroup"
                                        value="validation"
                                        checked={this.state.project === 'validation'}
                                        onChange={this.handleProject}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label="Recherche"
                                        name="ProjetGroup"
                                        value="recherche"
                                        checked={this.state.project === 'recherche'}
                                        onChange={this.handleProject}
                                    />
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Button
                                as={Link}
                                to="/List"
                                color="blue"
                                size="large"
                            >
                                Lancer la requête
                    </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default PartnerStudy;
