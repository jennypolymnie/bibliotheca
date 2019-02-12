import React from 'react';
import { Button, Rating, Segment, Menu, Icon, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import InputExemple from './InputExemple';
import TableCheck from './TableCheck';
import { Link } from 'react-router-dom';
import BdArticles from './BdArticles';
import './stylesheets/Article.css';


const Article = ({
    author, title, abstract, link, nature, concentration, support, test, onClick, journal
}) => (


        <div className="Article">
            <Segment>
                <div className="Presentation">

                    <div className="MainData" onClick={() => onClick(Article)}>
                        <p>
                            <span className="emphasis">{'Authors: '}</span>
                            {author}
                        </p>
                        <p>
                            <span className="emphasis">{'Title: '}</span>
                            {title}
                            {' '}

                        </p>

                        <p>
                            <span className="emphasis">{'Journal: '}</span>
                            {journal}
                            {' '}

                        </p>
                        <p>
                            <span className="emphasis">{'Abstract: '}</span>
                            {abstract}
                        </p>
                        <p>
                            <span className="emphasis">{'Lien: '}</span>
                            {link}
                        </p>
                    </div>

                    <div className="Elements">
                        <TableCheck
                            nature={nature}
                            support={support}
                            concentration={concentration}
                            test={test}
                        />
                    </div>

                </div>

                <div className="Review">
                    <Button as={Link} to='/review' color="blue"> Donnez votre avis </Button>
                    <div>
                        <div>Rigueur</div>
                        <Rating disabled icon="star" defaultRating={2} maxRating={5} />
                    </div>
                    <div>
                        <div>Analyse</div>
                        <Rating disabled icon="star" defaultRating={3} maxRating={5} />
                    </div>
                    <div>
                        <div>Résultats</div>
                        <Rating disabled icon="star" defaultRating={4} maxRating={5} />
                    </div>
                    <div>
                        <div>Interprétation</div>
                        <Rating disabled icon="star" defaultRating={3} maxRating={5} />
                    </div>
                    <Menu>
                        <Menu.Item as='a'>
                            <Icon name='users' /> Nombre d'avis
                        <Label color='blue' floating>
                                22
                        </Label>
                        </Menu.Item>
                    </Menu>

                </div>
            </Segment>
        </div>

    );

Article.PropTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    nature: PropTypes.string.isRequired,
    hierarchyLevel: PropTypes.string.isRequired,
    support: PropTypes.string.isRequired,
    transfert: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired
};

export default Article;
