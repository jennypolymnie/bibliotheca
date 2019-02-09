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

const GridForm = () => (

    <Grid textAlign="center">
        <Grid.Row>
            <Grid.Column color="blue">
                <Menu fluid vertical className="Menu">
                    <Menu.Item className="header">Chimie</Menu.Item>
                    <Menu.Item>Kit Extraction</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Kit 1"
                                control={Select}
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 2"
                                control={Select}
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 3"
                                control={Select}
                                options={ExtractionChemistry}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Kit de quantification</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Kit 1"
                                control={Select}
                                options={QuantificationChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 2"
                                control={Select}
                                options={QuantificationChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 3"
                                control={Select}
                                options={QuantificationChemistry}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Kit Amplification STRs Autosomaux</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Kit 1"
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 2"
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 3"
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Kit Amplification STRs Y</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Kit 1"
                                control={Select}
                                options={AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 2"
                                control={Select}
                                options={AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 3"
                                control={Select}
                                options={AmplificationYChemistry}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Kit Amplification STRs X</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Kit 1"
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 2"
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Kit 3"
                                control={Select}
                                options={AmplificationAutosomChemistry}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Test indicatif sang</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Test 1"
                                control={Select}
                                options={BloodTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Test 2"
                                control={Select}
                                options={BloodTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Test 3"
                                control={Select}
                                options={BloodTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Test indicatif salive</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Test 1"
                                control={Select}
                                options={SalivaTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Test 2"
                                control={Select}
                                options={SalivaTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Test 3"
                                control={Select}
                                options={SalivaTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>


                    <Menu.Item>Tests indicatif sperme</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Test 1"
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />

                            <Form.Field
                                label="Test 2"
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />

                            <Form.Field
                                label="Test 3"
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                        </Form.Group>
                    </Form>

                    <Menu.Item>Test indicatif secrétions vaginales</Menu.Item>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Field
                                label="Test 1"
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Test 2"
                                control={Select}
                                options={SpermTest}
                                placeholder="Choisir"
                            />
                            <Form.Field
                                label="Test 3"
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

export default GridForm;
