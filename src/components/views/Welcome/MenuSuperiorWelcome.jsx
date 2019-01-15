import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link , Redirect } from 'react-router-dom';

export default class MenuSuperiorWelcome extends Component {
  state = {  }

  handleItemClick = ({ name }) => this.setState({ activeItem: name })
  handleOnClick = () => this.setState({redirect: true});
  handleAbout = () => this.setState ({about: true});
  handleConnect = () => this.setState ({connect: true});

  render() {
    const { activeItem } = this.state

    if (this.state.redirect) {
      return <Redirect push to="/formLab" />;
    }

    if (this.state.about) {
      return <Redirect push to="/About"/>
    }

    if (this.state.connect) {
      return <Redirect push to="/Connexion"/>
    }

    return (
      <div>
      <Menu secondary>
        <Menu.Item 
        name='A propos' 
        active={activeItem === 'A propos'} 
        onClick={this.handleAbout} 
        />
        <Menu.Item
          name='Se connecter'
          active={activeItem === 'Se connecter'}
          onClick={this.handleConnect}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='Créer son profil'
            active={activeItem === 'Créer son profil'}
            onClick={this.handleOnClick}
          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}