import React from 'react'
import { Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => (
    (
        <Label as={ Link } to='/articles'>
            <span> Go to articles </span>
        </Label>
      )
      
)
export default Home