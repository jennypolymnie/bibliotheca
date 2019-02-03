import React, { Component } from 'react';
import MenuSuperiorWelcome from './MenuSuperiorWelcome';
import './Welcome.css';
import WelcomeBoard from './WelcomeBoard';
import Login from './Login';


class Welcome extends Component {

  render() {
    
    return (
        
        <div className="Wel">
        
          <div>
            <MenuSuperiorWelcome></MenuSuperiorWelcome>
          </div>

          <div className="Bo">
            <div className="Welc">
              <WelcomeBoard></WelcomeBoard>
            </div>
        
            <div className="Log">
              <Login></Login>
            </div>
          </div>
        
        </div>
    );
    
    }
}
      
      export default Welcome;