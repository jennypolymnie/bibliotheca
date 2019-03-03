import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// import screenfull from 'screenfull';
import ReactPlayer from 'react-player';
import { Button, Icon } from 'semantic-ui-react';

class Video extends Component {
    state = {
        playing: true
    }

    playPause = () => {
        this.setState({ playing: !this.state.playing });
    }

    stop = () => {
        this.setState({ playing: false });
    }

    // onClickFullscreen = () => {
    //     screenfull.request(findDOMNode(this.player));
    // }

    // ref = player => {
    //     this.player = player;
    // }

    render() {
        const { playing } = this.state;

        return (
            <div>

                <ReactPlayer
                    width='2'
                    height='2'
                    url="https://www.youtube.com/watch?v=S98-BIpzZuk&start_radio=1&list=RDS98-BIpzZuk"
                    playing={playing}
                />

                <Button onClick={this.stop} basic icon="stop" />
                <Button onClick={this.playPause} basic>{playing ? 'Pause' : 'Play'}</Button>
                {/* <Button onClick={this.onClickFullscreen}>Fullscreen</Button> */}

            </div>
        );
    }
}

export default Video;
