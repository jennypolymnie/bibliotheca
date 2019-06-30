import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StandardLayout from '../../Layouts/StandardLayout';
import { saveResearchRequest } from '../../../store/actions/actionCreators';
import Level from './Level';
import './LibraryRequest.less';

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
        if (value) {
            this.setState(({ options: currentOptions }) => ({
                options: [
                    ...currentOptions.filter(existingOption => existingOption.id !== id),
                    { label: option, value, id }
                ]
            }));
        } else {
            this.setState(({ options: currentOptions }) => ({
                options: currentOptions.filter(existingOption => existingOption.id !== id)
            }));
        }
    }

    submitRequest(optionList, category) {
        const options = this.state.options
            .filter(option => optionList
                .some(optionFromList => optionFromList === option.label));
        const userRequest = {
            options,
            category
        };
        this.props.onSubmit(userRequest);
    }

    render() {
        return (

            <div className="LibraryRequest">
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
