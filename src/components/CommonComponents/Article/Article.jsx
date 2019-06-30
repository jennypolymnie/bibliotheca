import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Segment, Button, Icon, Label, Grid, Statistic
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TableCheck from './SubComponents/TableCheck';
import PopupAbstract from './SubComponents/PopupAbstract';
import PopupButton from './SubComponents/PopupButton';
import { saveSelectedArticle } from '../../../store/actions/actionCreators';
import './stylesheets/Article.less';

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
                        <Grid.Row stretched className="articleInfo">
                            <PopupAbstract
                                title={title}
                                author={authors}
                                journal={journal}
                                reference={reference}
                                year={year}
                                abstract={abstract}
                            />
                            {link && (<a href={link} rel="noopener noreferrer" target="_blank">Science direct</a>)}
                        </Grid.Row>
                        <Grid.Row>
                            <span>
                                {labmatch.join(' ')}
                            </span>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        { canReview && (
                            <TableCheck
                                articleCharacteristics={articleCharacteristics}
                            />
                        )}
                    </Grid.Column>
                    <Grid.Column stretched width={2}>
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
                                <Segment basic compact className="reviewSegment">
                                    <Button.Group>
                                        <PopupButton />
                                        <Button
                                            icon
                                            color="blue"
                                            inverted
                                            onClick={() => {
                                                selectArticle(id);
                                                history.push('/reviewSummary');
                                            }}
                                        >
                                            <Icon name="users" />
                                            <span className="reviewText"> Avis </span>
                                        </Button>
                                    </Button.Group>
                                    <Label color="blue" floating basic>
                                        {reviewCount}
                                    </Label>
                                </Segment>
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
