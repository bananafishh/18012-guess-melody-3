import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: props.isPlaying,
      isTrackLoading: true,
    };

    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
  }

  componentDidMount() {
    const {src} = this.props;

    this.audio = new Audio(src);

    this.audio.oncanplaythrough = () => this.setState({isTrackLoading: false});

    this.audio.onpause = () => this.setState({isPlaying: false});
  }

  componentDidUpdate() {
    const {isPlaying} = this.state;

    if (isPlaying) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  componentWillUnmount() {
    this.audio.oncanplaythrough = null;
    this.audio.onpause = null;
    this.audio.src = ``;
    this.audio = null;
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
          <audio/>
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
