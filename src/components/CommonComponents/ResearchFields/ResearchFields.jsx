
import React from 'react';
import { Form, Grid } from 'semantic-ui-react';


const Research = () => (

    <div>

        <Grid container padded="false">
            <Grid.Row>
                <Grid.Column width={6}>
                    <Form>
                        <Form.Group grouped width="equal">
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
                </Grid.Column>


                <Grid.Column fluid width={6}>
                    <Form>
                        <Form.Group grouped width="equal">
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
                </Grid.Column>


                <Grid.Column fluid width={4}>
                    <Form>
                        <Form.Group grouped width="equal">
                            <Form.Field
                                label="Ajouter un thème"
                                control="input"
                                type="input"
                            />
                        </Form.Group>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>

);
export default Research;
