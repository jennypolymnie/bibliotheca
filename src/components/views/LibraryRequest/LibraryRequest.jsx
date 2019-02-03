import React, { Component } from 'react';
import {Button, Radio, Checkbox, Dropdown, Message, Form, Header} from 'semantic-ui-react';
import MenuSuperieur from '../search-results/MenuSuperieur';
import './LibraryRequest.css';
import StainSupport from './StainSupport';
import StainNature from './StainNature';
import ScreeningTest from './ScreeningTest';
import { Link } from 'react-router-dom';



class LibraryRequest extends Component {
  
  state = {}
  handleTransfer = (e, { value }) => this.setState({ 
    transfer: value 
  })
  
    render() {

  
      return (
          
        <div className="LibraryRequest">
          
            <div>
              <MenuSuperieur></MenuSuperieur>
            </div>
          
            <div className ="Message">
              <Message 
                color='blue'
                attached
                header='Bienvenue dans notre application LSJML!'
                content="Quel type d'article recherchez vous?"
              />
            </div>

            <div className = "ProfilIncluded">
              <Checkbox toggle label="Souhaitez vous utilisez le profil de votre laboratoire pour cette recherche?"/>
            </div>          

            <div className="Choice">
           

          <div className = "BlocSubSource">
               <Header textAlign='center' as='h2'>Sous Source</Header>
              <div className="QuestionDropdown">
                <div>
                  <p> Ethnie </p>
                </div>

                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainNature} />
                </div>
              </div>
          
              <div>
              <Button 
              color='blue' size='large' as = { Link } to = '/articles'>Envoyez la requête
              </Button>
              </div>

          </div>


          <div className = "BlocSource">
              <Header textAlign='center' as='h2'>Source</Header>
              <div className="QuestionDropdown">
                <div>
                  <p> Nature de la trace</p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainNature} />
                </div>
              </div>

              <div className="QuestionDropdown">
                <div>
                  <p> Support de la trace</p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainSupport} />
                </div>
              </div>

              <div className="QuestionDropdown">
                <div>
                  <p> Concentration (ng/ul)</p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainSupport} />
                </div>
              </div>

              <div className="QuestionDropdown">
                <div>
                  <p> Test indicatif </p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={ScreeningTest} />
                </div>
              </div>
          
              <div>
              <Button 
              color='blue' size='large' as = { Link } to = '/articles'>Envoyez la requête
              </Button>
              </div>
            </div>

          

          <div className = "BlocSubActivity">
               <Header textAlign='center' as='h2'>Sous Activité</Header>
              <div className="QuestionDropdown">
                <div>
                  <p> Ethnie </p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainNature} />
                </div>
              </div>
          
              <div>
              <Button 
              color='blue' size='large' as = { Link } to = '/articles'>Envoyez la requête
              </Button>
              </div>
            </div>

          <div className = "BlocActivity">
              <Header textAlign='center' as='h2'>Activité</Header>
              <div className="QuestionDropdown">
                <div>
                  <p> Nature de la trace</p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainNature} />
                </div>
              </div>

              <div className="QuestionDropdown">
                <div>
                  <p> Support de la trace</p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainSupport} />
                </div>
              </div>

              <div className="QuestionDropdown">
                <div>
                  <p> Temps entre faits et prélèvements</p>
                </div>
                <div className="Dropdown">
                  <Dropdown 
                  placeholder='Choisir' 
                  fluid 
                  selection 
                  options={StainNature} />
                </div>
              </div>

              <div>
                <p> Type de transfert supposé</p>
                <Form className="QuestionRadio">
                <Form.Field>
                  <Radio
                  label='Primaire'
                  name='TransferGroup'
                  value='primaire'
                  checked={this.state.transfer === 'primaire'}
                  onChange={this.handleTransfer}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                  label='Secondaire'
                  name='TransferGroup'
                  value='secondaire'
                  checked={this.state.transfer === 'secondaire'}
                  onChange={this.handleTransfer}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                  label='Tertiaire'
                  name='TransferGroup'
                  value='tertiaire'
                  checked={this.state.transfer === 'tertiaire'}
                  onChange={this.handleTransfer}
                  />
                </Form.Field>
                </Form>
              </div>
          
             

              <div>
              <Button 
              color='blue' size='large' as = { Link } to = '/articles'>Envoyez la requête
              </Button>
              </div>

          </div>

          </div>

        </div>
        

      );
    }
  }
  
  export default LibraryRequest;