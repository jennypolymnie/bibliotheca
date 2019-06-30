import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import ListLab from './ListLab';
import CountElement from '../../search-results/NbArticle';
import Users from './Users';
import StandardLayout from '../../../Layouts/StandardLayout';

const PartnerListLab = () => (
    <div>
        <Grid container>
            <Grid.Row>
                <CountElement name="Nombre de laboratoire pouvant être intéressé" count={2} />
                {Users.filter(user => user.profil === 'Lab').map(user => (
                    <ListLab key={user.name} labName={user.name} directorName={user.directorName} email={user.directorEmail} website={user.website} site={user.site} />
                ))
                }
            </Grid.Row>
            <Grid.Row>
                <Button color="blue">Exporter les informations</Button>
            </Grid.Row>
        </Grid>
    </div>
);

export default StandardLayout(PartnerListLab, 'Résultat de la recherche');
