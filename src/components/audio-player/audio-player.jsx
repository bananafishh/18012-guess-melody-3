import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.audioRef = createRef();

    this.state = {
      isPlaying: props.isPlaying,
      isTrackLoading: true,
    };

    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
  }

  componentDidMount() {
    const {src} = this.props;

    const audio = this.audioRef.current;

    audio.src = src;
    audio.oncanplaythrough = () => this.setState({isTrackLoading: false});
    audio.onpause = () => this.setState({isPlaying: false});
  }

  componentDidUpdate() {
    const {isPlaying} = this.state;

    const audio = this.audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this.audioRef.current;

    audio.oncanplaythrough = null;
    audio.onpause = null;
    audio.src = ``;
  }

  onPlayButtonClick() {
    this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
  }

  render() {
    const {
      isPlaying,
      isTrackLoading,
    } = this.state;

    return (
      <>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          onClick={this.onPlayButtonClick}
          disabled={isTrackLoading}
        />

        <div className="track__status">
          <audio ref={this.audioRef}/>
        </div>
      </>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default AudioPlayer;
