import React, { Component } from 'react';
import {
    Checkbox
} from 'semantic-ui-react';
import './LibraryRequest.css';
import StandardLayout from '../../layout/StandardLayout';
import Level from './Level';

class LibraryRequest extends Component {
    state = {}

    render() {
        return (

            <div className="LibraryRequest">
                <div className="ProfilIncluded">
                    <Checkbox toggle label="Utiliser le profil du laboratoire" />
                </div>
                <Level />
            </div>
        );
    }
}

export default StandardLayout(LibraryRequest, 'Interroger la bibliothèque');
