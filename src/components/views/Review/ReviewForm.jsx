import React, { Component } from 'react';
import {
    Radio, Form, Button, Header
} from 'semantic-ui-react';
import ArticleReviewed from './ArticleReviewed';
import './ReviewForm.css';
import ReviewQuestions from './ReviewQuestions';
import TableQuestions from './TableQuestions';


class ReviewForm extends Component {
    state = {}

    handleRigor = (e, { value }) => this.setState({
        rigor: value
    })

    handleStat = (e, { value }) => this.setState({
        stat: value
    })

    handleResult = (e, { value }) => this.setState({
        result: value
    })

    handleInterpret = (e, { value }) => this.setState({
        interpretation: value
    })

    handleChange = name => {
        switch (name) {
            case 'rigor':
                return handleRigor;
            case 'stat':
                return handleStat;
            case 'result':
                return handleResult;
            case 'interpret':
                return handleInterpret;
        }
    }

    render() {
        return (

            <div className="ReviewForm">

                <div>
                    <Header as="h1"> Donner votre avis sur cet article </Header>
                </div>
                <div className="ArticleReviewed">
                    <ArticleReviewed
                        author="David G. Casey, Judy Price'"
                        title="Nouveau Swab pour ADN de contact"
                        journal="Forensic Science International"
                        abstract="We demonstrate here that the RSID™-saliva test can be used as a test for human salivary..."
                        link="https://www.sciencedirect.com/science/article/pii/S0379073809004204"
                        onClick={this.handleCardClick}
                    />
                </div>

                {// <div>

                    // {TableQuestions.map(({ id, label, name, value }) => (
                    // <ReviewQuestions
                    // key={id}
                    // label={label}
                    // name={name}
                    // value={value}
                    // checked={this.state.value===value}
                    // onChange={this.handleChange({name})}
                    // >
                    // </ReviewQuestions>

                    // ))}
                    // </div>
                }


                <div className="QuestionRadio">
                    <p> Rigueur scientifique </p>
                    <Form className="Radio">
                        <Form.Field>
                            <Radio
                                label="Les expériences menées (en nombre et en qualité) permettent de répondre aux questions posées"
                                name="Rigor"
                                value="qualityquantity"
                                checked={this.state.rigor === 'qualityquantity'}
                                onChange={this.handleRigor}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Les expériences menées sont de qualité mais insuffisantes pour répondre aux questions posées"
                                name="Rigor"
                                value="quality"
                                checked={this.state.rigor === 'quality'}
                                onChange={this.handleRigor}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Les expériences menées ne permettent pas de répondre aux questions posées"
                                name="Rigor"
                                value="poor"
                                checked={this.state.rigor === 'poor'}
                                onChange={this.handleRigor}
                            />
                        </Form.Field>
                    </Form>
                </div>

                <div className="QuestionRadio">
                    <p> Analyse statistique</p>
                    <Form className="Radio">
                        <Form.Field>
                            <Radio
                                label="détaillée, transparente, et correctement appliquée"
                                name="Analyze"
                                value="detailedTransparentCorrect"
                                checked={this.state.stat === 'detailedTransparentCorrect'}
                                onChange={this.handleStat}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="détaillée, transparente, mais faussement appliquée"
                                name="Analyze"
                                value="detailedTransparentUncorrect"
                                checked={this.state.stat === 'detailedTransparentUncorrect'}
                                onChange={this.handleStat}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="détaillée, transparente mais inadaptée"
                                name="Analyze"
                                value="inadapted"
                                checked={this.state.stat === 'inadapted'}
                                onChange={this.handleStat}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="mentionnée mais non détaillée"
                                name="Analyze"
                                value="mentionned"
                                checked={this.state.stat === 'mentionned'}
                                onChange={this.handleStat}
                            />
                        </Form.Field>
                    </Form>

                </div>

                <div className="QuestionRadio">
                    <p> Résultats</p>
                    <Form className="Radio">
                        <Form.Field>
                            <Radio
                                label="Suffisants et convaincants"
                                name="Suffisants"
                                value="suffisants"
                                checked={this.state.result === 'suffisants'}
                                onChange={this.handleResult}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Insuffisants pour tirer des conclusions"
                                name="Insuffisants"
                                value="insuffisants"
                                checked={this.state.result === 'insuffisants'}
                                onChange={this.handleResult}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Biaisés"
                                name="Biaisés"
                                value="biaisés"
                                checked={this.state.result === 'biaisés'}
                                onChange={this.handleResult}
                            />
                        </Form.Field>
                    </Form>

                </div>

                <div className="QuestionRadio">
                    <p> Interprétation </p>
                    <Form className="Radio">
                        <Form.Field>
                            <Radio
                                label="Les résultats sont tous interprétés, détaillés et comparés à d'autres études"
                                name="Interprétés"
                                value="interpreted"
                                checked={this.state.interpretation === 'interpreted'}
                                onChange={this.handleInterpret}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Les résultats sont tous interprétés, détaillés mais ne sont pas comparés à d'autres études"
                                name="notenough"
                                value="notenough"
                                checked={this.state.interpretation === 'notenough'}
                                onChange={this.handleInterpret}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Radio
                                label="Certains résultats, différents de la majorité, n'ont pas été interprétés"
                                name="uninterpreted"
                                value="uninterpreted"
                                checked={this.state.interpretation === 'uninterpreted'}
                                onChange={this.handleInterpret}
                            />
                        </Form.Field>
                    </Form>

                </div>
                <Button color="blue">Soumettez votre opinion</Button>

            </div>
        );
    }
}

export default ReviewForm;
