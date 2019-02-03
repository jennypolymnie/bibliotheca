import React, { Component } from 'react';
import ListLab from './ListLab';
import {Button} from 'semantic-ui-react';
import MenuSuperieur from '../../search-results/MenuSuperieur';
import CountElement from '../../search-results/NbArticle';
import Users from './Users';


class PartnerListLab extends Component {

  render() {
    
    return (
        
      <div>
          <MenuSuperieur></MenuSuperieur>
        
          <h2>Résultat de la recherche</h2>

        <div>
        <CountElement name = "Nombre de laboratoire pouvant être intéressé" count = {4} />
        {Users.filter(user => user.profil==="Lab").map((user, index) => (
          <ListLab key={index} labName = {user.name} directorName = {user.directorName} email ={user.directorEmail} website={user.website} />
        ))
      }
        </div>

        <div>
        <Button color="blue">Exporter les informations</Button>
        </div>
        
      </div>
    );
  }
}

export default PartnerListLab;