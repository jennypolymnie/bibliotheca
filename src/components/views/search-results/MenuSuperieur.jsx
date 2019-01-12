import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link , Redirect } from 'react-router-dom';

export default class MenuSuperieur extends Component {
  state = { activeItem: 'Menu principal' }

  handleItemClick = ({ name }) => this.setState({ activeItem: name })
  handleOnClick = () => {
    this.setState({redirect: true});
  }

  render() {
    const { activeItem } = this.state

    if (this.state.redirect) {
      return <Redirect push to="/ProfilUpdate" />;
    }

    return (
      <div>
      <Menu secondary>
        <Menu.Item 
        name='Menu principal' 
        active={activeItem === 'Menu principal'} 
        onClick={this.handleItemClick} 
        />
        <Menu.Item
          name='Profil du laboratoire'
          active={activeItem === 'Profil du laboratoire'}
          onClick={this.handleOnClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='Déconnexion'
            active={activeItem === 'Déconnexion'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}