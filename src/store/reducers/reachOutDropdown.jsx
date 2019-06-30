import React from 'react';
import {
    CHANGE_CHOICE
} from '../actions/constants';

import GridForm from '../../components/Views/Profile/SubComponents/ChemistryGridForm';
import GridFormEquipment from '../../components/Views/Profile/SubComponents/GridFormEquipment';

const initialState = {
    Dropdown: {}
};


function displayDropdown(state = initialState, action) {
    switch (action.type) {
        case CHANGE_CHOICE: {
            const choice = state.choice;
            if (choice === 'chemistry') {
                return <GridForm />;
            }
            return <GridFormEquipment />;
        }

        default:
            return state;
    }
}
export default displayDropdown;
