import React from 'react'
import { Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Home = () => (
    (
        <div>
            <Label as={ Link } to='/proposals'>
                <span> Go to proposals </span>
            </Label>
            <Label as={ Link } to='/articles'>
            <span> Go to articles </span>
            </Label>
            <Label as={ Link } to='/profilUpdate'>
                <span> Go to profilUpdate </span>
            </Label>
            <Label as={ Link } to='/board'>
                <span> Go to board </span>
            </Label>
            <Label as={ Link } to='/booksellerRequest'>
                <span> Go to booksellerRequest </span>
            </Label>
            <Label as={ Link } to='/formLab'>
                <span> Go to formLab </span>
            </Label>
        </div>
      )
)
export default Home