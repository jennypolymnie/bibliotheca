import React, { Component } from 'react';
import {
    Button, Radio, Checkbox, Dropdown, Form, Header, Segment
} from 'semantic-ui-react';
import './LibraryRequest.css';
import { Link } from 'react-router-dom';
import StainSupport from './StainSupport';
import StainNature from './StainNature';
import ScreeningTest from './ScreeningTest';
import Concentration from './Concentration';


class LibraryRequest extends Component {
    state = {}

    handleTransfer = (e, { value }) => this.setState({
        transfer: value
    })

    render() {
        return (

            <div className="LibraryRequest">

                <Header as="h1">Interroger la bibliothèque</Header>

                <div className="ProfilIncluded">
                    <Checkbox toggle label="Utiliser le profil du laboratoire" />
                </div>

                <div className="Choice">


                    <div className="BlocSubSource">
                        <Segment color="yellow" fluid>
                            <Header textAlign="center" as="h2">Sous Source</Header>

                            <div className="QuestionDropdown">
                                <div>
                                    <p>
                                        {' '}
                                        {'Population pertinente'}
                                        {' '}
                                    </p>
                                </div>

                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>

                                <div>
                                    <p>
                                        {' '}
                                        {"Kit d'amplification"}
                                        {' '}
                                    </p>
                                </div>

                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    color="blue"
                                    size="large"
                                    as={Link}
                                    to="/articles"
                                >
                                    Envoyez la requête
                                </Button>
                            </div>
                        </Segment>
                    </div>

                    <div className="BlocSource">
                        <Segment color="yellow" fluid>
                            <Header textAlign="center" as="h2">Source</Header>

                            <div className="QuestionDropdown">
                                <div>
                                    <p> Nature supposée de la trace</p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>

                                <div>
                                    <p> Support de la trace</p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainSupport}
                                    />
                                </div>

                                <div>
                                    <p> Concentration (ng/ul)</p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={Concentration}
                                    />
                                </div>

                                <div>
                                    <p> Test indicatif </p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={ScreeningTest}
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    color="blue"
                                    size="large"
                                    as={Link}
                                    to="/articles"
                                >
                                    Envoyez la requête
                                </Button>
                            </div>
                        </Segment>
                    </div>


                    <div className="BlocSubActivity">
                        <Segment color="yellow" fluid>
                            <Header textAlign="center" as="h2">Sous Activité</Header>

                            <div className="QuestionDropdown">

                                <div>
                                    <p>
                                        {' '}
                                        {'Fluides à distinguer'}
                                        {' '}
                                    </p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>
                                <div>
                                    <p>
                                        {' '}
                                        {'Support de la trace'}
                                        {' '}
                                    </p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>
                                <div>
                                    <p>
                                        {' '}
                                        {'Concentration (ng/ul)'}
                                        {' '}
                                    </p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>
                                <div>
                                    <p>
                                        {' '}
                                        {'Test indicatif appliqué'}
                                        {' '}
                                    </p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>
                                <div>
                                    <p>
                                        {' '}
                                        {'Test indicatif appliqué'}
                                        {' '}
                                    </p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    color="blue"
                                    size="large"
                                    as={Link}
                                    to="/articles"
                                >
                                    Envoyez la requête
                                </Button>
                            </div>
                        </Segment>
                    </div>

                    <div className="BlocActivity">
                        <Segment color="yellow" fluid>
                            <Header textAlign="center" as="h2">Activité</Header>

                            <div className="QuestionDropdown">
                                <div>
                                    <p> Nature de la trace</p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>

                                <div>
                                    <p> Support de la trace</p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainSupport}
                                    />
                                </div>

                                <div>
                                    <p> Temps entre faits et prélèvements</p>
                                </div>
                                <div>
                                    <Dropdown
                                        placeholder="Choisir"
                                        fluid
                                        selection
                                        options={StainNature}
                                    />
                                </div>

                                <div>
                                    <p> Type de transfert supposé</p>
                                </div>

                                <div>
                                    <Form className="QuestionRadio">
                                        <Form.Field>
                                            <Radio
                                                label="Primaire"
                                                name="TransferGroup"
                                                value="primaire"
                                                checked={this.state.transfer === 'primaire'}
                                                onChange={this.handleTransfer}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Radio
                                                label="Secondaire"
                                                name="TransferGroup"
                                                value="secondaire"
                                                checked={this.state.transfer === 'secondaire'}
                                                onChange={this.handleTransfer}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <Radio
                                                label="Tertiaire"
                                                name="TransferGroup"
                                                value="tertiaire"
                                                checked={this.state.transfer === 'tertiaire'}
                                                onChange={this.handleTransfer}
                                            />
                                        </Form.Field>
                                    </Form>
                                </div>

                            </div>

                            <div>
                                <Button
                                    color="blue"
                                    size="large"
                                    as={Link}
                                    to="/articles"
                                >
                                    Envoyez la requête
                                </Button>
                            </div>
                        </Segment>
                    </div>

                </div>
            </div>
        );
    }
}

export default LibraryRequest;
