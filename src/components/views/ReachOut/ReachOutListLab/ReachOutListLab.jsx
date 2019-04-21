import React from 'react';
import { Button } from 'semantic-ui-react';
import ResultsFormat from './ResultsFormat';
import CountElement from '../../search-results/NbArticle';
import Laboratories from './Laboratories';

const ReachOutListLab = () => (
    <div>

        <h2>Résultat de la recherche</h2>

        <div>
            <CountElement name="Nombre de laboratoire pouvant être intéressé" count={2} />
            {Laboratories.filter(user => user.profil === 'Lab').map((user, index) => (
                <ResultsFormat key={index} labName={user.name} directorName={user.directorName} email={user.directorEmail} website={user.website} />
            ))
            }
        </div>

        <div>
            <Button color="blue">Exporter les informations en pdf</Button>
            <Button color="blue">Adresser un e-mail à la liste</Button>
        </div>

    </div>
);

export default ReachOutListLab;
