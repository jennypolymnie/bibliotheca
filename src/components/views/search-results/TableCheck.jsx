import React from 'react';
import { connect } from 'react-redux';
import { Icon, Grid, Label } from 'semantic-ui-react';
import {
    userRequestFieldsSelector
} from '../../../store/selectors/searchResults';

const TableCheck = ({
    fieldRequest
}) => (
    <Grid padded={false}>  
        {fieldRequest.map(option => (
            <Grid.Row padding={false}>
                <Grid.Column textAlign="left" width={2} padded={false}>
                    <Icon
                        fitted
                        name={'check'}
                        size="small"
                        color={'blue'}
                    />
                </Grid.Column>
                <Grid.Column textAlign="left" width={12} padded={false}>
                    {option}
                </Grid.Column>
            </Grid.Row>
        ))}
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