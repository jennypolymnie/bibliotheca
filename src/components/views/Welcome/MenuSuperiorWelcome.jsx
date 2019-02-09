import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

export default class MenuSuperiorWelcome extends Component {
  state = { }

  handleItemClick = ({ name }) => this.setState({ activeItem: name })

  handleAbout = () => this.setState({ about: true });


  render() {
      const { activeItem } = this.state;

      if (this.state.about) {
          return <Redirect push to="/About" />;
      }

      return (
          <div>
              <Segment inverted>
                  <Menu inverted pointing secondary>
                      <Menu.Item
                          name="A propos"
                          active={activeItem === 'A propos'}
                          onClick={this.handleAbout}
                      />
                  </Menu>
              </Segment>
          </div>
      );
  }
}
