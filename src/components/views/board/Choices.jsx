import React from 'react';
import { Grid, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Choices = () => (
    <Grid textAlign="center" columns={2}>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Menu fluid vertical>

                    <Menu.Item className="header">
                        {' '}
                        <h2>Bibliothèque</h2>
                    </Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/libraryRequest"
                        >
                Interroger la bibliothèque
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/proposals"
                        >
                Proposer un article à la bibliothécaire
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/review"
                        >
                Donner son avis sur les articles
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/booksellerRequest"
                        >
                Interroger la bibliothécaire
                        </Button>
                    </Menu.Item>
                </Menu>
            </Grid.Column>

            <Grid.Column style={{ maxWidth: 450 }}>
                <Menu fluid vertical>

                    <Menu.Item className="header"><h2>Forum</h2></Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/articles"
                        >
          Entrer dans le forum
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/PartnerStudy"
                        >
          Rechercher un partenaire pour un projet
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/requestEquipment"
                        >
          Demander conseil pour une technologie
                        </Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button
                            size="big"
                            color="blue"
                            fluid
                            as={Link}
                            to="/requestEquipment"
                        >
          Consulter les projets en attente
                        </Button>
                    </Menu.Item>


                </Menu>
            </Grid.Column>

        </Grid.Row>
    </Grid>
);

export default Choices;
