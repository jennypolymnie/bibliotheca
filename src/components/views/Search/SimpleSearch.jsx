import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    Button, Form, Input, Grid
} from 'semantic-ui-react';
import { saveResearchRequest } from '../../../store/actions/actionCreators';
import StandardLayout from '../../Layouts/StandardLayout';
import './stylesheets/SimpleSearch.less';

class TraditionalSearch extends Component {
    constructor(props) {
        super(props);
        this.updateOption = this.updateOption.bind(this);
        this.submitRequest = this.submitRequest.bind(this);
        this.state = {
            options: []
        };
    }

    updateOption(option, value, id) {
        this.setState(({ options: currentOptions }) => ({
            options: [
                ...currentOptions.filter(existingOption => existingOption.id !== id),
                { label: option, value, id }
            ]
        }));
    }

    submitRequest() {
        // const userRequest = {
        //     options: this.state.options,
        //     category: 'all'
        // };
        // this.props.onSubmit(userRequest);
        this.props.history.push('/articles');
    }

    render() {
        return (
            <Grid container>
                <Grid.Row>
                    <Form className="format" submit={this.submitRequest}>
                        <Form.Group widths="equal" grouped>
                            <Form.Field
                                control={Input}
                                label="Titre"
                                placeholder=""
                                onChange={(event, { value }) => this.updateOption('title', value, 'title')}
                            />
                            <Form.Field
                                control={Input}
                                label="Auteurs"
                                placeholder=""
                                onChange={(event, { value }) => this.updateOption('authors', value, 'authors')}
                            />
                            <Form.Field
                                control={Input}
                                label="Mots-clé"
                                placeholder=""
                            />
                            <Form.Field
                                control={Input}
                                label="Journal"
                                placeholder=""
                                onChange={(event, { value }) => this.updateOption('journal', value, 'journal')}
                            />

                            <Form.Field
                                control={Input}
                                label="Année"
                                placeholder=""
                                onChange={(event, { value }) => this.updateOption('year', value, 'year')}
                            />
                        </Form.Group>

                    </Form>
                </Grid.Row>
                <Grid.Row>
                    <Button
                        color="blue"
                        as={Link}
                        to="/articles"
                    >
                        Rechercher
                    </Button>
                </Grid.Row>
            </Grid>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    onSubmit: userRequest => dispatch(saveResearchRequest(userRequest))
});

TraditionalSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};


export default connect(null, mapDispatchToProps)(StandardLayout(TraditionalSearch, 'Trouver un article spécifique'));
