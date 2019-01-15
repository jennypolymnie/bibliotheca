import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Avatar from './Avatar';

export default class MenuSuperieur extends Component {
  state = { }

  handleItemClick = ({ name }) => this.setState({ activeItem: name })
  
  handleProfil = () => {
    this.setState({profil: true});
  }
  handleDeconnexion = () => {
    this.setState({deconnexion: true});
  }
  handleBoard = () => {
    this.setState({board: true});
  }
  handleAbout = () => {
    this.setState({about: true});
  }

  render() {
    const { activeItem } = this.state

    if (this.state.profil) {
      return <Redirect push to="/ProfilUpdate" />;
    }

    if (this.state.deconnexion) {
      return <Redirect push to="/Welcome"/>;
    }

    if (this.state.board) {
      return <Redirect push to="/board"/>;
    }

    if (this.state.about) {
      return <Redirect push to="/About"/>;
    }

    return (
      <div>
      <Menu secondary>
        <Menu.Item 
        name='Menu principal' 
        active={activeItem === 'Menu principal'} 
        onClick={this.handleItemClick && this.handleBoard} 
        />
        <Menu.Item
          name='Profil du laboratoire'
          active={activeItem === 'Profil du laboratoire'}
          onClick={this.handleItemClick && this.handleProfil}
        />
        <Menu.Item
          name='A propos'
          active={activeItem === 'A propos'}
          onClick={this.handleItemClick && this.handleAbout}
        />
        <Menu.Menu position='right'>
          <Avatar/>
          <Menu.Item
            name='Déconnexion'
            active={activeItem === 'Déconnexion'}
            onClick={this.handleItemClick && this.handleDeconnexion}
          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}