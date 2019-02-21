import React, { Component } from 'react';
import {
    Button, Checkbox, Dropdown, Header, Segment, Grid
} from 'semantic-ui-react';
import './LibraryRequest.css';
import { Link } from 'react-router-dom';
import OptionsRequest from '../../data/OptionsRequest';
import Hierarchy from '../../data/Hierarchy';

const generateList = id => OptionsRequest
    .filter(option => option.categories.includes(id))
    .map(filteredOption => (
        <Segment basic>
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

                <Header as="h1">Interroger la bibliothèque</Header>

                <div className="ProfilIncluded">
                    <Checkbox toggle label="Utiliser le profil du laboratoire" />
                </div>

                <Grid stretched container>
                    {
                        Hierarchy.map(({ name, id }) => (
                            <Grid.Column key={id} width={4} padded stretched>
                                <Segment color="yellow" raised container>
                                    <Header textAlign="center" as="h2">{name}</Header>
                                    {generateList(id)}
                                    <Grid.Row stretched verticalAlign="bottom">
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
            </div>
        );
    }
}

export default LibraryRequest;
