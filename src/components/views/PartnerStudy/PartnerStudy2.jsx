import React, { Component } from 'react';
import {
    Button, Form, Radio, Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import StandardLayout from '../../layout/StandardLayout';
import Research from './Research';


class PartnerStudy2 extends Component {
    state = {}

    handlePays = (e, { value }) => this.setState({
        pays: value
    })

    handleProject = (e, { value }) => this.setState({
        project: value
    })

    render() {
        return (
            <div>
                <Grid container>
                    <Grid.Row>
                        <h3>Informations sur le projet</h3>
                    </Grid.Row>
                    <Grid.Row columns={2} stretched>
                        <Grid.Column width={4}>
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
                        <Grid.Column width={6}>
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
                    <Grid.Row>
                        <h3>Axes de recherche</h3>
                        <Research />
                    </Grid.Row>
                    <Grid.Row>
                        <Button
                            as={Link}
                            to="/List"
                            color="blue"
                            size="large"
                        >
                                Lancer la requête
                        </Button>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default StandardLayout(PartnerStudy2, 'Trouver un partenaire d\'étude');
