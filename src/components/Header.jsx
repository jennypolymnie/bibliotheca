import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import './Header.css'


const HeaderGreetings = () => (
  <Header as='h1'className = "Greetings">
    <p>Bienvenue dans Bibliotheca</p>
    <Image src='/logo.svg' size='small'/> LSJML
  </Header>
)

export default HeaderGreetings