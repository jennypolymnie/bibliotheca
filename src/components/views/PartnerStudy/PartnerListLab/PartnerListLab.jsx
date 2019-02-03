import React, { Component } from 'react';
import ListLab from './ListLab';
import {Button} from 'semantic-ui-react';
import MenuSuperieur from '../../search-results/MenuSuperieur';
import CountElement from '../../search-results/NbArticle';


class PartnerListLab extends Component {

  render() {
    
    return (
        
      <div>
          <MenuSuperieur></MenuSuperieur>
        
          <h2>Résultat de la recherche</h2>

        <div>
        <CountElement name = "Nombre de laboratoire pouvant être intéressé" count = {4} />
        <ListLab nameLab = "Unité de Génétique Forensique" nameDirector = "Vincent Castella" email ="vincent.castella@chuv.ch" />
        <ListLab nameLab = "LSJML" nameDirector = "Diane Seguin" email = "diane.seguin@gv.ca"/>
        </div>

        <div>
        <Button></Button>
        </div>
        
      </div>
    );
  }
}

export default PartnerListLab;