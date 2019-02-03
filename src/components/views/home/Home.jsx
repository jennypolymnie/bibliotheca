import React from 'react'
import { Grid, } from 'semantic-ui-react'

const Home = () => (
    (
        <Grid padded>
            <Grid.Row verticalAlign={"middle"} textAlign={"center"}>
                <Grid.Column stretched width={1} color={"blue"}>
                    <span> 1 </span>
                    <br />
                    <span> 2 </span>
                    <br />
                    <span> 3 </span>
                </Grid.Column >
                <Grid.Column width={14}>
                </Grid.Column>
                <Grid.Column stretched width={1} color={"blue"}>
                    <span> 1 </span>
                    <br />
                    <span> 2 </span>
                    <br />
                    <span> 3 </span>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
)
export default Home