import React, { Component } from 'react';
import {
    Button, Radio, Form, Input, Header, Grid
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import './RequestAdvice.css';
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

    handleChange(activeOption) {
        this.setState({
            activeOption
        });
    }

    handleQuestion = (e, { value }) => this.setState({
        question: value
    })

    render() {
        return (

            <div className="RequestEquipment">

                <Header as="h1">Demander conseil</Header>
                <p>{'Choisissez la chimie ou l\'équipement pour lequel vous souhaitez obtenir des informations et recevez la liste des personnes que vous pouvez contacter à ce sujet.'}</p>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column textAlign="center">
                            <Toggle handleChange={this.handleChange} option={this.state.activeOption} />
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
