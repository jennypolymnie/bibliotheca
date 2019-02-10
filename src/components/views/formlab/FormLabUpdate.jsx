import React, { Component } from 'react';
import {
    Button, Checkbox, Form, Input, Icon, Header, Radio, Label
} from 'semantic-ui-react';
import './FormLabUpdate.css';
import { Link } from 'react-router-dom';
import GridForm from './GridForm';
import Research from '../PartnerStudy/Research';
import GridFormEquipment from './GridFormEquipment';

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
        <div className="ProfilLab">
            <Header as="h1"> Profil du labo </Header>
            <div className="InfoLab">
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

            <div className="InfoContact">
                <Form>
                    <Form.Group grouped>
                        <Label>
                            {' '}
                            <h1>Contact</h1>
                            {' '}
                        </Label>
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
            </div>


            <div className="Titre">
                <h1>Axes de recherche</h1>
                <Button basic circular color="green" icon as={Link} to="/articles">
                    <Icon size="large" name="question circle" />
                </Button>
            </div>


            <div className="InfoRecherche">
                <Research />

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
                <h1> Chimie </h1>
                <GridForm />
            </div>

            <div classeName="Partie2">
                <h1> Equipement </h1>
                <GridFormEquipment />
            </div>

            <div className="Confidentialite">
                <Form>
                    <Form.Field>
                        {' '}
                        <Checkbox
                            toggle
                            label="Souhaitez vous que ces informations soient visibles pour
          les autres laboratoires? Cela permettrait aux laboratoires qui souhaiteraient changer d'équipement
          ou de chimie de vous consulter. Les laboratoires travaillant sur les mêmes axes de recherche que les
          votre pourraient également vous contacter pour des projets communs. Vous pouvez modifier votre profil
          à tout moment"
                        />
                        {' '}

                    </Form.Field>
                </Form>
            </div>

            <div className="Acceptation">
                <Button color="blue" size="large" as={Link} to="/profilUpdate">Enregistrer les modifications</Button>
            </div>


        </div>


    );
}
}

export default FormLabUpdate;
