import React, { Component } from 'react';
import { Button, Message, Input, Menu, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './ProfilType.css';

class ProfilType extends Component {
    state = { activeItem: 'Directeur Laboratoire Expertise' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>


                <Header as="h1"> Choisissez le profil qui vous correspond </Header>

                <Menu attached='top' tabular>
                    <Menu.Item
                        name='Directeur Laboratoire Expertise'
                        active={activeItem === 'Directeur Laboratoire Expertise'}
                        onClick={this.handleItemClick} />
                    <Menu.Item
                        name='Directeur Laboratoire Académique'
                        active={activeItem === 'Directeur Laboratoire Académique'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Etudiant Universitaire'
                        active={activeItem === 'Etudiant Universitaire'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Professeur Universitaire'
                        active={activeItem === 'Professeur Universitaire'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="Membre d'une instance judiciaire"
                        active={activeItem === "Membre d'une instance judiciaire"}
                        onClick={this.handleItemClick}
                    />
                </Menu>

                <Segment attached='bottom'>
                    <p>Welcome</p>
                    <Button
                        circular
                        size="large"
                        color="blue"
                        as={Link}
                        to="/formLab">
                        {"Sélectionner ce profil"}
                    </Button>
                </Segment>
            </div>
        );
    }
}





// class ProfilType extends Component {
//     render() {
//         return (
//             <div className="ProfilLab">

//                 <div>
//                     <Message
//                         color="blue"
//                         attached
//                         header="Bienvenue dans notre application!"
//                         content="Veuillez renseigner votre domaine"
//                     />
//                 </div>

//                 <div>
//                     <p>Vous êtes:</p>
//                 </div>

//                 <div className="Button">
//                     <Button circular size="large" color="blue" icon as={Link} to="/formLab"> {"Directeur d'un laboratoire d'expertise"} </Button>
//                     <Button circular size="large" color="blue" icon as={Link} to="/formLab"> {"Directeur d'un laboratoire académique"} </Button>
//                     <Button circular size="large" color="blue" icon as={Link} to="/formLab"> {"Etudiant ou Professeur d'université"} </Button>
//                     <Button circular size="large" color="blue" icon as={Link} to="/formLab"> {"Membre d'une Instance Judiciaire"} </Button>
//                     <Button circular size="large" color="blue" icon as={Link} to="/formLab"> {"Scientifique indépendant"}</Button>
//                 </div>

//             </div>
//         );
//     }
// }


export default ProfilType;
