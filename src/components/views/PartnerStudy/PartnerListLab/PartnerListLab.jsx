import React from 'react';
import { Button } from 'semantic-ui-react';
import ListLab from './ListLab';
import CountElement from '../../search-results/NbArticle';
import Users from './Users';

const PartnerListLab = () => (
    <div>

        <h2>Résultat de la recherche</h2>

        <div>
            <CountElement name="Nombre de laboratoire pouvant être intéressé" count={2} />
            {Users.filter(user => user.profil === 'Lab').map(user => (
                <ListLab key={user.name} labName={user.name} directorName={user.directorName} email={user.directorEmail} website={user.website} />
            ))
            }
        </div>

        <div>
            <Button color="blue">Exporter les informations</Button>
        </div>

    </div>
);

export default PartnerListLab;
