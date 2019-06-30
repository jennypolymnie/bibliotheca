import React from 'react';
import {
    Button, Checkbox, Form
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GridFormEquipment from './GridFormEquipment';


const AnalyticalPart = () => (

    <div>
        <div classeName="Partie2">
            <h1> Partie Equipement </h1>
            <GridFormEquipment />
        </div>

        <div className="Confidentialite">
            <Form>
                <Form.Field>
                    <Checkbox toggle label="Souhaitez vous que ces informations soient visibles pour les autres laboratoires?" />
                </Form.Field>
            </Form>
        </div>
        <Button color="blue" as={Link} to="/logo">Continuer</Button>

    </div>

);

export default AnalyticalPart;
