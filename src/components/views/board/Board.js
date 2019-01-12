import React, { Component } from 'react'
import { Button, Message} from 'semantic-ui-react'
import './Board.css';


class Board extends Component {

  
    render() {
  
      return (
        <div className = "Board">

            <div className ="Message">
            <Message color='blue'
            attached
            header='Bienvenue sur notre site!'
            content='Comment puis je vous aider aujourd hui?'
            />
            </div>

            <div className ="ResearchThemes">
          <div className= "ResearchThemes1">
          <Button label = "Rechercher un article" as= { Link } to = '/articles'></Button>
          <Button label = "Proposer un article" as= { Link } to = '/articles'></Button>
          <Button label = "Donner son avis" as= { Link } to = '/articles'></Button>
          <Button label = "Poser une question à la bibliothécaire" as= { Link } to = '/articles'></Button>
            </div>

            <div className= "ResearchThemes2">
            <Button label = "Entrer dans le forum" as= { Link } to = '/articles'></Button>
            <Button label = "Rechercher un partenaire pour une étude" as= { Link } to = '/articles'></Button>
            <Button label = "Demander conseil pour une technologie" as= { Link } to = '/articles'></Button>
            </div>

            </div>
            </div>
    

              )
            }
          }

export default Board