import PropTypes from 'prop-types';
import {
    List
} from 'semantic-ui-react';
import React from 'react';


const Expertise = () => (
    <div>
        <div>{'Vous même et l\'ensemble de votre équipe disposerez d\'un compte permettant de:'}</div>
        <List bulleted>
            <List.Item>Accéder à la banque de données de Bibliothéca</List.Item>
            <List.Item>Evaluer des articles</List.Item>
            <List.Item>
                {'Accéder aux profils des autres laboratoires d\'expertise en génétique forensique'}
                <List.List>
                    <List.Item> Echanger sur des technologies</List.Item>
                    <List.Item>Trouver un partenaire pour un projet de recherche</List.Item>
                </List.List>
            </List.Item>
            <List.Item>Proposer des articles, des thèses, des documents, des études non publiées</List.Item>
            <List.Item>Echanger sur le forum</List.Item>
        </List>
    </div>
);

const Academic = () => (
    <div>
        <div>{'Vous même et l\'ensemble de votre équipe disposerez d\'un compte permettant de:'}</div>
        <List bulleted>
            <List.Item>Accéder à la banque de données de Bibliothéca</List.Item>
            <List.Item>
                {'Accéder aux profils des autres laboratoires d\'expertise en génétique forensique'}
                <List.List>
                    <List.Item> Echanger sur des technologies </List.Item>
                    <List.Item> Trouver un partenaire pour un projet de recherche </List.Item>
                </List.List>
            </List.Item>
            <List.Item>Proposer des articles, des thèses, des documents, des études non publiées</List.Item>
        </List>
    </div>
);

const University = () => (
    <div>
        <div>{'Vous même et l\'ensemble de votre équipe disposerez d\'un compte permettant de:'}</div>
        <List bulleted>
            <List.Item>Accéder à la banque de données de Bibliothéca</List.Item>
            <List.Item>
                {'Accéder aux profils des autres laboratoires d\'expertise en génétique forensique'}
                <List.List>
                    <List.Item> Echanger sur des technologies </List.Item>
                    <List.Item> Trouver un partenaire pour un projet de recherche </List.Item>
                </List.List>
            </List.Item>
            <List.Item>Proposer des articles, des thèses, des documents, des études non publiées</List.Item>
        </List>
    </div>
);


const Student = () => (
    <div>
        <div>{'Grâce à l\'université à laquelle vous êtes rattaché(e) vous pourrez:'}</div>
        <List bulleted>
            <List.Item> Accéder à la banque de données de Bibliothéca </List.Item>
            <List.Item> Proposer des articles, des thèses, des documents, des études non publiées </List.Item>
        </List>
    </div>
);

const Independent = () => (
    <div>
        <div>{'En tant qu\'indépendant vous pourrez:'}</div>
        <List bulleted>
            <List.Item> Accéder à la banque de données de Bibliothéca </List.Item>
            <List.Item> Proposer des articles, des thèses, des documents, des études non publiées </List.Item>
        </List>
    </div>
);

const Type = [
    {
        id: 1,
        name: 'Expertise',
        tab: 'Directeur d\'un laboratoire d\'expertise',
        text: <Expertise />,
        to: '/formLab',
        cost: 0
    },
    {
        id: 2,
        name: 'Academic',
        tab: 'Directeur d\'un laboratoire académique',
        text: <Academic />,
        to: '/formLab',
        cost: 0
    },
    {
        id: 3,
        name: 'Student',
        tab: 'Etudiant Universitaire',
        text: <Student />,
        to: '/formLab',
        cost: 0
    },
    {
        id: 4,
        name: 'Professor',
        tab: 'Professeur Universitaire',
        text: <University />,
        to: '/formLab',
        cost: 0
    },
    {
        id: 5,
        name: 'Scientist',
        tab: 'Scientifique Indépendant',
        text: <Independent />,
        to: '/formLab',
        cost: 0
    }
];

Type.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired

};
export default Type;
