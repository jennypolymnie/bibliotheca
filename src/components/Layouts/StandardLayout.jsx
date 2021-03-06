import React from 'react';
import { Grid, Header, Segment } from 'semantic-ui-react';
// import './StandardLayout.css';


const StandardLayout = (C, title) => props => (
    <Segment basic>
        <Grid>
            <Grid.Row width={16}>
                <Header class="page_title" size="huge">
                    {title}
                </Header>
            </Grid.Row>
            <Grid.Row width={16}>
                {/* <div style={{ width: '100%' }}> */}
                <C {...props} />
                {/* </div> */}
            </Grid.Row>
        </Grid>
    </Segment>
);

export default StandardLayout;
