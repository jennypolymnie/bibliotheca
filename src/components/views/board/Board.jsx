import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import './Board.css';
import Choices from './Choices';
import MenuSuperieur from '../search-results/MenuSuperieur';

class Board extends Component {
    render() {
        return (
            <div className="Board">

                <MenuSuperieur />

                <div className="Message">
                    <Message
                        color="blue"
                        attached
                        header="Menu principal"
                        content="Comment puis je vous aider aujourd hui?"
                    />
                </div>

                <div className="MainMenu">
                    <Choices />
                </div>
            </div>


        );
    }
}

export default Board;
