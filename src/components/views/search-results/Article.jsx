import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Segment, Menu, Icon, Label, Grid, Statistic
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TableCheck from './TableCheck';
import PopupAbstract from './PopupAbstract';
import PopupButton from './PopupButton';
import { saveSelectedArticle } from '../../../store/actions/actionCreators';

const Article = ({
    id,
    author,
    title,
    reference,
    abstract,
    year,
    link,
    journal,
    articleCharacteristics,
    selectArticle,
    history,
    canReview
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
                    { canReview && (
                        <TableCheck
                            articleCharacteristics={articleCharacteristics}
                        />
                    )}
                </Grid.Column>
                <Grid.Column stretched width={3}>
                    <Grid.Row centered>
                        {/* <div> */}
                        <Statistic as="Grid.Column" size="small" color="blue">
                            <Statistic.Value>
                                {'5'}
                            </Statistic.Value>
                            <Statistic.Label>
                                {'/12'}
                            </Statistic.Label>
                        </Statistic>
                        {/* </div> */}
                    </Grid.Row>
                    <Grid.Row>
                        { canReview && (
                            <Menu compact>
                                <Menu.Item>
                                    <PopupButton />
                                </Menu.Item>
                                <Menu.Item
                                    onClick={() => {
                                        selectArticle(id);
                                        history.push('/reviewSummary');
                                    }}
                                >
                                    <Icon name="users" />
                                    Avis
                                    <Label color="blue" floating>
                                        22
                                    </Label>
                                </Menu.Item>
                            </Menu>
                        )}
                    </Grid.Row>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

);

Article.propTypes = {
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    journal: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    articleCharacteristics: PropTypes.shape,
    selectArticle: PropTypes.func.isRequired,
    canReview: PropTypes.bool,
    history: PropTypes.array.isRequired
};

Article.defaultProps = {
    articleCharacteristics: {},
    canReview: true
};

const mapDispatchToProps = dispatch => ({
    selectArticle: selectedArticle => dispatch(saveSelectedArticle(selectedArticle))
});


export default withRouter(connect(null, mapDispatchToProps)(Article));
