import React from 'react';
import {
    Button, Rating, Segment, Menu, Icon, Label
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TableCheck from './TableCheck';
import ReferenceFormat from './ReferenceFormat';
import './stylesheets/Article.css';
import PopupAbstract from './PopupAbstract';
import PopupButton from './PopupButton';


const Article = ({
    author, title, reference, abstract, year, link, nature, concentration, support, test, journal, otherCharacteristics
}) => (
    <Segment>
        <div className="Presentation">

            <div className="MainData">
                {/* <p>
                    <PopupAbstract trigger={<ReferenceFormat author={author} title={title} journal={journal} year={year} />} />
                </p> */}
                <p>
                    <PopupAbstract
                        title={title}
                        author={author}
                        journal={journal}
                        reference={reference}
                        year={year}
                    />

                </p>
                <p>
                    {link}
                </p>
            </div>

            <div className="Elements">
                <TableCheck
                    otherCharacteristics={otherCharacteristics}
                />
            </div>

        </div>

        <div className="Review">
            {/* <Button as={Link} to="/review" color="blue"> Donnez votre avis </Button> */}
            {/* <div>
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
            </div> */}
            {/* <div>
                <PopupButton />
            </div> */}
            <Menu>
                <Menu.Item>
                    <PopupButton />
                </Menu.Item>
                <Menu.Item as="a">
                    <Icon name="users" />
                    {' '}
                    Nombre d'avis
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
    nature: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    // hierarchyLevel: PropTypes.string.isRequired,
    support: PropTypes.string.isRequired,
    // transfert: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    otherCharacteristics: PropTypes.shape
};

Article.defaultProps = {
    otherCharacteristics: {}
};

export default Article;
