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
    article,
    canReview,
    history,
    selectArticle
}) => {
    const {
        id,
        authors,
        title,
        reference,
        abstract,
        year,
        link,
        journal,
        score,
        reviewCount,
        labmatch,
        ...articleCharacteristics
    } = article;
    return (
        <Segment>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <Grid.Row>
                            <PopupAbstract
                                title={title}
                                author={authors}
                                journal={journal}
                                reference={reference}
                                year={year}
                                abstract={abstract}
                            />
                            <a href={link} rel="noopener noreferrer" target="_blank">Science direct</a>
                        </Grid.Row>
                        <Grid.Row>
                            <span>
                                {labmatch}
                            </span>
                        </Grid.Row>
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
                            <Statistic as="Grid.Column" size="small" color="blue">
                                <Statistic.Value>
                                    {score === undefined ? '-' : score}
                                </Statistic.Value>
                                <Statistic.Label>
                                    {'/12'}
                                </Statistic.Label>
                            </Statistic>
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
                                            {reviewCount}
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
};


Article.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        reference: PropTypes.string.isRequired,
        journal: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        articleCharacteristics: PropTypes.shape,
        score: PropTypes.number,
        reviewCount: PropTypes.number.isRequired
    }).isRequired,
    canReview: PropTypes.bool,
    history: PropTypes.array.isRequired,
    selectArticle: PropTypes.func.isRequired
};

Article.defaultProps = {
    canReview: true
};

const mapDispatchToProps = dispatch => ({
    selectArticle: selectedArticle => dispatch(saveSelectedArticle(selectedArticle))
});


export default withRouter(connect(null, mapDispatchToProps)(Article));
