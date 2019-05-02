import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Grid } from 'semantic-ui-react';

const TableCheck = ({ otherCharacteristics }) => (
    <Grid padded={false}>
        <Grid.Row padding={false}>
            <Grid.Column textAlign="right" width={4} padded={false}>
                <Icon
                    name={otherCharacteristics.nature === 'salive' ? 'check' : 'close icon'}
                    size="small"
                    color={otherCharacteristics.nature === 'salive' ? 'blue' : 'red'}
                />
            </Grid.Column>
            <Grid.Column width={12} padded={false}>
                Nature
            </Grid.Column>
        </Grid.Row>
        <Grid.Row padded={false}>
            <Grid.Column textAlign="right" width={4} padded={false}>
                <Icon
                    name={otherCharacteristics.support === 'mouchoir' ? 'check' : 'close icon'}
                    size="small"
                    color={otherCharacteristics.support === 'mouchoir' ? 'blue' : 'red'}
                />
            </Grid.Column>
            <Grid.Column width={12} padded={false}>
                Support
            </Grid.Column>
        </Grid.Row>
        <Grid.Row padded={false}>
            <Grid.Column textAlign="right" width={4} padded={false}>
                <Icon
                    name={otherCharacteristics.concentration === '<100pg/ul' ? 'check' : 'close icon'}
                    size="small"
                    color={otherCharacteristics.concentration === '<100pg/ul' ? 'blue' : 'red'}
                />
            </Grid.Column>
            <Grid.Column width={12} padded={false}>
                Concentration
            </Grid.Column>
        </Grid.Row>
        <Grid.Row padded={false}>
            <Grid.Column textAlign="right" width={4} padded={false}>
                <Icon
                    name={otherCharacteristics.test === 'RSIDSaliva' ? 'check' : 'close icon'}
                    size="small"
                    color={otherCharacteristics.test === 'RSIDSaliva' ? 'blue' : 'red'}
                />
            </Grid.Column>
            <Grid.Column width={12} padded={false}>
                Test indicatif
            </Grid.Column>
        </Grid.Row>
    </Grid>
);


// {BdArticles.map(({
//     authors, title, id, abstract, journal, link, ...otherCharacteristics
// }) => (
//     <Grid padded={false}>
//         <Grid.Row padding={false}>
//             <Grid.Column textAlign="right" width={4} padded={false}>
//                 <Icon
//                     name={otherCharacteristics.map === otherCharacteristics.store ? 'check' : 'close icon'}
//                     size="small"
//                     color={otherCharacteristics.map === 'salive' ? 'blue' : 'red'}
//                 />
//             </Grid.Column>
//             <Grid.Column width={12} padded={false}>
//                 Nature
//             </Grid.Column>
//         </Grid.Row>
//     </Grid>


TableCheck.propTypes = {
    otherCharacteristics: PropTypes.shape
};

TableCheck.defaultProps = {
    otherCharacteristics: {}
};

export default TableCheck;
