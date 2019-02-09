import React, { Component } from 'react';
import { Message, Image } from 'semantic-ui-react';
import './Board.css';
import Choices from './Choices';
import LogoIcon from '../Welcome/LogoIcon';

class Board extends Component {
    render() {
        return (
            <div className="Board">


                <div className="Message">
                    <Message
                        color="blue"
                        attached
                        header="Menu principal"
                        content="Comment puis je vous aider aujourd hui?"
                    />
                </div>

                <LogoIcon />
                <Image src={require('../../../resources/bibliotheca_blue.svg')} size="small" />

                <div className="MainMenu">
                    <Choices />
                </div>
            </div>


        );
    }
}

export default Board;
