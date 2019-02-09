import React from 'react';
import {
    Grid, Menu, Form, Select
} from 'semantic-ui-react';
import ExtractionChemistry from './ExtractionChemistry';
import QuantificationChemistry from './QuantificationChemistry';
import AmplificationAutosomChemistry from './AmplificationAutosomChemistry';
import AmplificationYChemistry from './AmplificationYChemistry';
import SalivaTest from './SalivaTest';
import BloodTest from './BloodTest';
import SpermTest from './SpermTest';
import './GridForm.css';

const GridFormEquipment = () => (

    <Grid textAlign="center">
        <Grid.Row>
            <Grid.Column color="blue">
                <Menu fluid vertical>
                    <Menu.Item className="header">Equippement</Menu.Item>
                    <Menu.Item>Robot Extraction</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Bloc chauffant</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Electrophorèse capillaire</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Quantification</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Sequenceur nouvelle génération</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item></Menu.Item>
                </Menu>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default GridFormEquipment;
