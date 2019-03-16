import React, { Component } from 'react';
import {
    Button, Radio, Form, Input, Header, Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import './RequestEquipment.css';
import ChemistryPanel from './ChemistryPanel';
import EquipmentPanel from './EquipmentPanel';

class RequestAdvice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeOption: props.activeOption,
            question: props.question
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleQuestion = this.handleQuestion.bind(this);
    }

    // static getDerivedStateFromProps(props) {
    //     console.log('stupid derive');
    //     return {
    //         activeOption: props.activeOption,
    //         question: props.question
    //     };
    // }

    handleChange() {
        this.setState(state => {
            const activeOption = state.activeOption === 'chemistry' ? 'equipment' : 'chemistry';
            console.log(activeOption);
            return { activeOption };
        });
    }

    handleQuestion = (e, { value }) => this.setState({
        question: value
    })

    render() {
        return (

            <div className="RequestEquipment">

                <Header as="h1">Demander conseil</Header>

                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Form>
                                <Form.Group grouped widths="equal">
                                    <Form.Field
                                        required
                                        control={Input}
                                        label="Poser votre question"
                                        placeholder="question"
                                    />
                                    <Form.Field
                                        required
                                        control={Input}
                                        label="Email de la personne à renseigner"
                                        placeholder="adresse e-mail"
                                    />
                                </Form.Group>
                            </Form>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column textAlign="center">
                            <Toggle handleChange={this.handleChange} checked={this.state.activeOption === 'equipment'} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            {this.state.activeOption === 'chemistry' ? <ChemistryPanel /> : <EquipmentPanel />}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <p>
                                {'Quel est le type de votre question?'}
                            </p>
                            <Form className="QuestionRadio">
                                <Form.Field>
                                    <Radio
                                        label="Question technique"
                                        name="TypeQuestion"
                                        value="technique"
                                        checked={this.state.question === 'technique'}
                                        onChange={this.handleQuestion}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Radio
                                        label="Question interprétation"
                                        name="TypeQuestion"
                                        value="interpretation"
                                        checked={this.state.question === 'interpretation'}
                                        onChange={this.handleQuestion}
                                    />
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>

                            <Button
                                as={Link}
                                to="/List"
                                color="blue"
                                size="large"
                            >
                                {'Lancer la requête'}
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


RequestAdvice.propTypes = {
    activeOption: PropTypes.string,
    question: PropTypes.string
};

RequestAdvice.defaultProps = {
    activeOption: 'chemistry',
    question: ''
};

// function mapStateToProps(state) {
//     return {
//         activeOption: state.reachOutDropDown.choice,
//         question: state.reachOutDropDown.question
//     };
// }

// function mapDispatchToProps(dispatch) {
//     // return bindActionCreators(actionCreators, dispatch);
// }


export default RequestAdvice; // connect(mapStateToProps, mapDispatchToProps)(RequestEquipment);
