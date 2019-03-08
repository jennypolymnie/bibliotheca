import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// import screenfull from 'screenfull';
import ReactPlayer from 'react-player';
import { Button } from 'semantic-ui-react';


// const input = document.querySelector('video');
// const url = URL.createObjectURL(input.Video[0]);

// const input = document.querySelector('[ type="file" accept="video/*,.mp4" ]');
// const url = URL.createObjectURL(input.files[0]);


class Video extends Component {
    state = {
        playing: true
    }


    // onClickFullscreen = () => {
    //     screenfull.request(ReactDOM.findDOMNode(this.refs.player))
    // }

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
                    //ref="player"
                    width='2'
                    height='2'
                    url={url}
                    playing={playing}
                />

                <Button onClick={this.stop} basic icon="stop" />
                <Button onClick={this.playPause} basic>{playing ? 'Pause' : 'Play'}</Button>
                <Button onClick={this.onClickFullscreen} basic icon="expand" />

            </div>
        );
    }
}

export default Video;
