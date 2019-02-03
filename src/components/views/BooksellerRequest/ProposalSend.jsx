import React, { Component } from 'react';
import { Message} from 'semantic-ui-react';
import MenuSuperieur from '../search-results/MenuSuperieur';


class ProposalSend extends Component {
  
    render() {
  
      return (
          
        <div className="ProposalSend">
          
          <MenuSuperieur></MenuSuperieur>
 
          <div>
            <Message positive>
                <Message.Header>Merci pour votre contribution à Bibliothéca</Message.Header>
                <p>
                La bibliothécaire va classifier l'article dans les 2 jours ouvrables.
                </p>
            </Message>
          </div>

       </div>


          );
    }
  }
  
  export default ProposalSend;