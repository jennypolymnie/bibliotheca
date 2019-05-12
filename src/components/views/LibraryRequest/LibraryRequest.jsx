import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Checkbox
} from 'semantic-ui-react';
import './LibraryRequest.css';
import StandardLayout from '../../layout/StandardLayout';
import { saveResearchRequest } from '../../../store/actions/actionCreators';
import Level from './Level';

class LibraryRequest extends Component {
    constructor(props) {
        super(props);
        this.selectOption = this.selectOption.bind(this);
        this.submitRequest = this.submitRequest.bind(this);
        this.state = {
            options: []
        };
    }

    selectOption(option, value, id) {
        const currentOptions = this.state.options;
        this.setState({
            options: [
                ...currentOptions,
                { label: option, value, id }
            ]
        });
    }

    submitRequest(optionList) {
        const userRequest = this.state.options
            .filter(option => optionList
                .some(optionFromList => optionFromList === option.label));
        this.props.onSubmit(userRequest);
    }

    render() {
        return (

            <div className="LibraryRequest">
                <div className="ProfilIncluded">
                    <Checkbox toggle label="Utiliser le profil du laboratoire" />
                </div>
                <Level selectOption={this.selectOption} submitRequest={this.submitRequest} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSubmit: userRequest => dispatch(saveResearchRequest(userRequest))
});

LibraryRequest.propTypes = {
    onSubmit: PropTypes.func.isRequired
};


export default connect(null, mapDispatchToProps)(StandardLayout(LibraryRequest, 'Interroger la bibliothèque'));
