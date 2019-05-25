import React from 'react';
import {
    Segment, Menu, Icon, Label, Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import PopupAbstract from '../search-results/PopupAbstract';
// import PopupButton from '../search-results/PopupButton';
import './ArticleReviewed.css';

const ArticleReviewed = ({
    author, title, reference, abstract, year, link, journal
}) => (
    <Segment>
        <Grid>
            <Grid.Row columns={3}>
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
                </Grid.Column>
                <Grid.Column width={3}>

                    <Menu compact>
                        <Menu.Item as="a">
                            <Icon name="users" />
                            {' '}
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

ArticleReviewed.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    // nature: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    // hierarchyLevel: PropTypes.string.isRequired,
    // support: PropTypes.string.isRequired,
    // transfert: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired
    // otherCharacteristics: PropTypes.shape
};

export default ArticleReviewed;
