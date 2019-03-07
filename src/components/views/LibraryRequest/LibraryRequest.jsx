import React, { Component } from 'react';
import {
    Button, Checkbox, Dropdown, Header, Segment, Grid, GridColumn
} from 'semantic-ui-react';
import './LibraryRequest.css';
import { Link } from 'react-router-dom';
import OptionsRequest from '../../data/OptionsRequest';
import Hierarchy from '../../data/Hierarchy';
import StandardLayout from '../../layout/StandardLayout';

const generateList = id => OptionsRequest
    .filter(option => option.categories.includes(id))
    .map(filteredOption => (
        <Segment basic className="search_option_field">
            <Header sub>
                {filteredOption.name}
            </Header>
            <Dropdown
                placeholder="Choisir"
                fluid
                selection
                options={filteredOption.options}
            />
        </Segment>
    ));

class LibraryRequest extends Component {
    state = {}

    render() {
        return (

            <div className="LibraryRequest">
                <div className="ProfilIncluded">
                    <Checkbox toggle label="Utiliser le profil du laboratoire" />
                </div>
                <Grid celled="internally">
                    <Grid.Row>
                        <Grid.Column width={1}>
                            <Header className="request_type" size="small">
                                {'Pré-évaluation'}
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            {/* <Grid> */}
                            <Segment color="yellow" raised container className="search_option">
                                <Segment basic compact className="search_button">
                                    <Button
                                        color="blue"
                                        size="large"
                                        as={Link}
                                        to="/articles"
                                    >
                                        Envoyez la requête
                                    </Button>
                                </Segment>
                            </Segment>
                            {/* </Grid> */}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                            <Header className="request_type" size="small">
                                {'Évaluation'}
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <Grid stretched container>
                                {
                                    Hierarchy.map(({ name, id }) => (
                                        <Grid.Column key={id} width={4} padded stretched>
                                            <Segment color="yellow" raised container className="search_option">
                                                <Header textAlign="center" as="h2">{name}</Header>
                                                {generateList(id)}
                                                <Grid.Row stretched verticalAlign="bottom" className="search_button">
                                                    <Button
                                                        color="blue"
                                                        size="large"
                                                        as={Link}
                                                        to="/articles"
                                                    >
                                                        Envoyez la requête
                                                    </Button>
                                                </Grid.Row>
                                            </Segment>
                                        </Grid.Column>
                                    ))
                                }
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default StandardLayout(LibraryRequest, 'Interroger la bibliothèque');
