import React from 'react';
import {
    Button, Checkbox, Form
} from 'semantic-ui-react';
import './FormLab.css';
import { Link } from 'react-router-dom';
import GridForm from './ChemistryGridForm';


const AnalyticalPart = () => (
    <div>
        <div classeName="Partie2">
            <h1> Partie Analytique </h1>
            <GridForm />
        </div>

        <div className="Confidentialite">
            <Form>
                <Form.Field>
                    <Checkbox toggle label="Souhaitez vous que ces informations soient visibles pour les autres laboratoires?" />
                </Form.Field>
            </Form>
        </div>
        <Button color="blue" as={Link} to="/equipmentPart">Continuer</Button>

    </div>

);

export default AnalyticalPart;
