import React from 'react';
import {
    Button, Segment, Menu, Icon, Label
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './stylesheets/Article.css';


const Article = ({
    author, title, abstract, journal, link
}) => (
    <Segment>
        <div className="Presentation">

            <div className="MainData">
                <p>
                    <span className="emphasis">Authors: </span>
                    {author}
                </p>
                <p>
                    <span className="emphasis">Title: </span>
                    {title}
                    {' '}

                </p>

                <p>
                    <span className="emphasis">Journal: </span>
                    {journal}
                    {' '}

                </p>
                <p>
                    <span className="emphasis">Abstract: </span>
                    {abstract}
                </p>
                <p>
                    <span className="emphasis">Lien: </span>
                    {link}
                </p>
            </div>
        </div>

        <div className="Review">
            <Button as={Link} to="/review" color="blue"> Donnez votre avis </Button>
            <Menu>
                <Menu.Item as="a">
                    <Icon name="users" />
                    {'Nombre d\'avis'}
                    <Label color="blue" floating>
                        22
                    </Label>
                </Menu.Item>
            </Menu>

        </div>
    </Segment>
);

Article.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired
};

export default Article;
