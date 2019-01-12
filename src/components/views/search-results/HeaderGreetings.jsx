import React from 'react'
import { Header } from 'semantic-ui-react'
import './stylesheets/HeaderGrettings.css'


const HeaderGreetings = () => (
  <Header as='h1'className = "Greetings">
    <p>Bienvenue dans Bibliotheca</p>
    <p> LSJML</p>
  </Header>
)

export default HeaderGreetings