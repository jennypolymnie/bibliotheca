import React, { Component } from 'react';
import {
    Button, Form, Input, Icon, Radio
} from 'semantic-ui-react';
import './FormLab.css';
import { Link } from 'react-router-dom';
import GridForm from './GridForm';


class FormLab extends Component {
    state = {}

    handleSame = (e, { value }) => this.setState({
        same: value
    })

    handleDifferent = (e, { value }) => this.setState({
        different: value
    })

    render() {
        return (
            <div className="ProfilLab">
                <div className="LabInfo">
                    <h1>Labo</h1>
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
                </div>

                <div className="LabInfo">
                    <h1>Informations générales</h1>
                    <Form>
                        <Form.Group grouped widths="equal">
                            <Form.Field
                                required
                                control={Input}
                                label="Nom"
                                placeholder="Nom"
                            />
                            <Form.Field
                                required
                                control={Input}
                                label="Prénom"
                                placeholder="Nom et Prénom du directeur laboratoire"
                            />

                            <Form.Field
                                required
                                control={Input}
                                label="Nom du laboratoire"
                                placeholder="Nom du laboratoire"
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
                </div>


                <div className="ResearchQuestion">
                    <h1>Axes de recherche</h1>
                    <Button basic circular color="green" icon as={Link} to="/articles">
                        <Icon size="large" name="question circle" />
                    </Button>
                </div>


                <div className="ResearchInfo">
                    <div className="InfoRecherche1">
                        <Form>
                            <Form.Group grouped>
                                <Form.Field
                                    label="Le laboratoire est uniquement un laboratoire d'expertise "
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="Détermination de la nature du fluide biologique"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="ADN ancien"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="Méthylation"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="Interprétation des mélanges"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="Chromosome Y"
                                    control="input"
                                    type="checkbox"
                                />
                            </Form.Group>
                        </Form>
                    </div>

                    <div className="InfoRecherche2">
                        <Form>
                            <Form.Group grouped>
                                <Form.Field
                                    label="Chromosome X"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="Logiciel d'interprétation"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="Détection de l'ADN de contact"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="Détermination des caractéristiques physiques"
                                    control="input"
                                    type="checkbox"
                                />
                                <Form.Field
                                    label="ADN mitochondrial"
                                    control="input"
                                    type="checkbox"
                                />
                            </Form.Group>
                        </Form>
                    </div>


                    <div className="InfoRecherche3">
                        <Form>
                            <Form.Group grouped>
                                <Form.Field
                                    label="Ajouter un thème"
                                    control="input"
                                    type="input"
                                />
                            </Form.Group>
                        </Form>
                    </div>

                </div>

                <div className="SameResearch">
                    <Form>
                        <Form.Field label="Seriez vous intéressé à la réalisation d'un projet avec un autre laboratoire sur l'un de vos thèmes de recherche?" />
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
                </div>

                <div className="DifferentResearch">
                    <Form>
                        <Form.Field label="Seriez vous intéressé à la réalisation d'un projet avec un autre laboratoire sur un thème qui n'est pas l'un de vos thèmes de recherche?" />
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
                </div>

                <div classeName="Partie2">
                    <h1> Partie Analytique </h1>
                    <GridForm />
                </div>

                <Button color="blue" as={Link} to="/analyticalPart">Continuer</Button>

            </div>
        );
    }
}

export default FormLab;
