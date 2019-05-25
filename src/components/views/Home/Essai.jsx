import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import { Button, Icon } from 'semantic-ui-react';
import Video from './VideoDemo';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Essai extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <Button icon color="grey" fluid onClick={this.openModal}>
                    Démo
                    <Icon size="large" name="video play" color="grey" />
                </Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                >
                    <Button.Group basic size="small" floated="right">
                        <Button icon="close" onClick={this.closeModal} />
                        <Button icon="share alternate" />
                    </Button.Group>
                    <Video url="https://www.youtube.com/watch?v=S98-BIpzZuk&start_radio=1&list=RDS98-BIpzZuk" playing />
                </Modal>
            </div>
        );
    }
}
export default Essai;
