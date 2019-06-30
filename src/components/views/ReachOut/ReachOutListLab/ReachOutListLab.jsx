import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import ResultsFormat from './ResultsFormat';
import CountDisplay from '../../../CommonComponents/CountDisplay/CountDisplay';
import Laboratories from './Laboratories';
import StandardLayout from '../../../Layouts/StandardLayout';

const ReachOutListLab = () => (
    <div>
        <Grid container>
            <Grid.Row>
                <CountDisplay name="Nombre de laboratoire pouvant être intéressé" count={2} />
                {Laboratories.filter(user => user.profil === 'Lab').map(user => (
                    <ResultsFormat
                        key={user.name}
                        labName={user.name}
                        directorName={user.directorName}
                        email={user.technicalEmail}
                        website={user.website}
                        site={user.site}
                    />
                ))
                }
            </Grid.Row>
            <Grid.Row>
                <Button color="blue">Exporter les informations en pdf</Button>
                <Button color="blue">Adresser un e-mail à la liste</Button>
            </Grid.Row>
        </Grid>
    </div>
);

export default StandardLayout(ReachOutListLab, 'Résultat de la recherche');
