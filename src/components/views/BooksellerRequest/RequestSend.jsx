import React, { Component } from 'react';
import { Message} from 'semantic-ui-react';

class RequestSend extends Component {
  
    render() {
  
      return (
          
        <div className="RequestSend">
          
 
          <div>
            <Message positive>
                <Message.Header>Votre requête a bien été envoyée</Message.Header>
                <p>
                La bibliothécaire vous répondra au plus vite.
                </p>
            </Message>
          </div>

       </div>


          );
    }
  }
  
  export default RequestSend;