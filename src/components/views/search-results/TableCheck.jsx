import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Grid } from 'semantic-ui-react';
import {
    userRequestSelector
} from '../../../store/selectors/searchResults';

const TableCheck = ({
    articleCharacteristics,
    userRequest
}) => (
    <Grid padded={false}>
        {userRequest.map(option => (
            <Grid.Row padding={false}>
                <Grid.Column textAlign="right" width={3} padded={false}>
                    <Icon
                        name={option.value === articleCharacteristics[option.id] ? 'check' : 'close icon'}
                        size="small"
                        color={option.value === articleCharacteristics[option.id] ? 'blue' : 'red'}
                    />
                </Grid.Column>
                <Grid.Column textAlign="left" width={12} padded={false}>
                    <span>
                        {option.value}
                    </span>
                </Grid.Column>
            </Grid.Row>
        ))}
    </Grid>
);

TableCheck.propTypes = {
    articleCharacteristics: PropTypes.shape.isRequired,
    userRequest: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    userRequest: userRequestSelector(state)

});

export default connect(mapStateToProps)(TableCheck);
