import React, { Component } from 'react';
import { Button, Message, Radio, Form } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import MenuSuperieur from '../search-results/MenuSuperieur';
import RequestingLabInfo from '../PartnerStudy/RequestingLabInfo';
import GridForm from '../formlab/GridForm';
import './RequestEquipment.css';


class RequestEquipment extends Component {

    state = {}
  handleQuestion = (e, { value }) => this.setState({ 
    question: value 
  })

  render() {
  

    return (
      
        <div className = "RequestEquipment">

            <div>
                <MenuSuperieur></MenuSuperieur>
            </div>

            <div>
                <Message 
                color='blue'
                attached
                header="Question technique ou d'interprétation"
                content='Cocher la chimie et/ou la technologie pour laquelle vous souhaitez avoir un avis.
                La bibliothécaire va ensuite vous mettre en relation avec un ou des laboratoires utilisant cette 
                chimie et/ou cette technologie et qui ont accepté de partager leur profil'
              />
            </div>


            <div className = "LabRequest">
            <RequestingLabInfo 
                a='Poser votre question' 
                b='question'
                c='Email de la personne à renseigner'
                d='adresse e-mail' >
            </RequestingLabInfo>
            </div>


            <div className = "Sélection">
                <GridForm/>
            </div>

            <div className="QuestionType">
                <p> Quel est le type de votre question?</p>
                <Form className="QuestionRadio">
                    <Form.Field>
                        <Radio
                        label='Question technique'
                        name='TypeQuestion'
                        value='technique'
                        checked={this.state.question === 'technique'}
                        onChange={this.handleQuestion}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                        label='Question interprétation'
                        name='TypeQuestion'
                        value='interpretation'
                        checked={this.state.question === 'interpretation'}
                        onChange={this.handleQuestion}
                        />
                    </Form.Field>
                </Form>

          </div>


            <div className="ButtonRequestEquipment">
                <Button 
                as= { Link } to = '/List'
                color = 'blue' 
                size='large'>
                Lancer la requête
                </Button>
            </div>
        </div>
        );
    }
}
          
    export default RequestEquipment;