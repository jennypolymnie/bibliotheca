import React from 'react';
import { connect } from 'react-redux';
import { Icon, Grid } from 'semantic-ui-react';
import {
    userRequestFieldsSelector
} from '../../../store/selectors/searchResults';

const TableCheck = ({
    otherCharacteristics,
    fieldRequest
}) => (
    <Grid padded={false}>
        <Grid.Row padding={false}>
            <Grid.Column textAlign="right" width={4} padded={false}>
                {fieldRequest.map(option => (
                    <Icon
                        name={option === otherCharacteristics.option ? 'check' : 'close icon'}
                        size="small"
                        color={option === otherCharacteristics.option ? 'blue' : 'red'}
                    />
                ))}
            </Grid.Column>
        </Grid.Row>
    </Grid>
);


const mapStateToProps = state => ({
    fieldRequest: userRequestFieldsSelector(state)

});

export default connect(mapStateToProps)(TableCheck);


// const TableCheck = ({ otherCharacteristics, fieldRequest }) => (
//     <Grid padded={false}>
//         <Grid.Row padding={false}>
//             <Grid.Column textAlign="right" width={4} padded={false}>
//                 {fieldRequest.map(option => (
//                     <Icon
//                         name={option === otherCharacteristics.fieldRequest ? 'check' : 'close icon'}
//                         size="small"
//                         color={option === otherCharacteristics.fieldRequest ? 'blue' : 'red'}
//                     />
//                 ))}
//             </Grid.Column>
//         </Grid.Row>
//     </Grid>
// );

// TableCheck.propTypes = {
//     otherCharacteristics: PropTypes.shape
// };

// TableCheck.defaultProps = {
//     otherCharacteristics: {}
// };

// export default TableCheck;