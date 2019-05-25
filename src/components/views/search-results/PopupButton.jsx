import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { saveSelectedArticle } from '../../../store/actions/actionCreators';

const PopupButton = props => (
    <Popup
        trigger={<Button as={Link} to="/reviewForm" color="blue" icon="add" />}
        content="Donnez votre avis"
        basic
        position="top left"
        onClick={() => props.selectArticle(props.articleId)}
    />
);

PopupButton.propTypes = {
    selectArticle: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
    selectArticle: selectedArticleId => dispatch(saveSelectedArticle(selectedArticleId))
});

export default connect(null, mapDispatchToProps)(PopupButton);
