import React from 'react';
import {
    Segment, Menu, Icon, Label, Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import TableCheck from './TableCheck';
import PopupAbstract from './PopupAbstract';
import PopupButton from './PopupButton';

const Article = ({
    author, title, reference, abstract, year, link, journal
}) => (
    <Segment>
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <PopupAbstract
                        title={title}
                        author={author}
                        journal={journal}
                        reference={reference}
                        year={year}
                        abstract={abstract}
                    />
                    <a href={link} rel="noopener noreferrer" target="_blank">Science direct</a>
                </Grid.Column>
                <Grid.Column width={3}>
                    <TableCheck />
                </Grid.Column>
                <Grid.Column width={3}>

                    <Menu compact>
                        <Menu.Item>
                            <PopupButton />
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Icon name="users" />
                            Avis
                            <Label color="blue" floating>
                                22
                            </Label>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>
            </Grid.Row>
        </Grid>
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
