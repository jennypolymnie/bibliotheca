import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuSuperieur extends Component {
  state = { activeItem: 'Résultat de la recherche' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item 
        name='Menu principal' 
        active={activeItem === 'Menu principal'} 
        onClick={this.handleItemClick} 
        />
        <Menu.Item
          name='Profil du laboratoire'
          active={activeItem === 'Profil du laboratoire'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item
            name='Déconnexion'
            active={activeItem === 'Déconnexion'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}