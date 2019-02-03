import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default class MenuSuperiorAbout extends Component {
  state = {  }

  handleItemClick = ({ name }) => this.setState({ activeItem: name })
  handleWelcome = () => this.setState ({welcome: true});


  render() {
    const { activeItem } = this.state

    if (this.state.welcome) {
      return <Redirect push to="/welcome"/>
    }

    return (
      <div>
      <Segment inverted>
        <Menu inverted pointing secondary>
        <Menu.Item 
        name='Accueil' 
        active={activeItem === 'Accueil'} 
        onClick={this.handleWelcome} 
        />
      </Menu>
      </Segment>
      </div>
    )
  }
}