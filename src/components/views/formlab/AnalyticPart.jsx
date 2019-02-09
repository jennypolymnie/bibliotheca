import React, { Component } from 'react';
import { Button, Checkbox, Form, Input,Icon, Message, Radio} from 'semantic-ui-react';
import './FormLab.css';
import GridForm from './GridForm';
import {Link} from 'react-router-dom';


class AnalyticalPart extends Component {

  state = {}
  handleSame = (e, { value }) => this.setState({
    same: value
  })
  handleDifferent = (e, { value }) => this.setState({ 
    different: value 
  })

  render() {

    return (


<div>
<div classeName = "Partie2">
          <h1> Partie Analytique </h1>
          <GridForm/>
        </div>
    
        <div className = "Confidentialite">
          <Form>
            <Form.Field > 
              <Checkbox toggle label="Souhaitez vous que ces informations soient visibles pour les autres laboratoires?"/> 
            </Form.Field>
          </Form>
        </div>
</div>

);
}
}

export default AnalyticalPart