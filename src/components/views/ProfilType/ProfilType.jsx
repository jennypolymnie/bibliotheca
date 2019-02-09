import React, { Component } from 'react';
import { Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ProfilType.css';


class ProfilType extends Component {
    render() {
        return (
            <div className="ProfilLab">

                <div>
                    <Message
                        color="blue"
                        attached
                        header="Bienvenue dans notre application!"
                        content="Veuillez renseigner votre domaine"
                    />
                </div>

                <div>
                    <p>Vous êtes:</p>
                </div>

                <div className="Button">
                    <Button circular size="large" color="blue" icon as={Link} to="/formLab">Directeur de laboratoire</Button>
                    <Button circular size="large" color="blue" icon as={Link} to="/formLab">Etudiant ou Professeur d'université</Button>
                    <Button circular size="large" color="blue" icon as={Link} to="/formLab">Membre d'une Instance Judiciaire</Button>
                    <Button circular size="large" color="blue" icon as={Link} to="/formLab">Scientifique indépendant</Button>
                </div>

            </div>
        );
    }
}

export default ProfilType;
