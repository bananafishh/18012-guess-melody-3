import React, {PureComponent} from 'react';

import AudioPlayer from '../../components/audio-player/audio-player.jsx';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: 0,
      };

      this.handleAudioPlayerButtonClick = this.handleAudioPlayerButtonClick.bind(this);
    }

    handleAudioPlayerButtonClick(activePlayerIndex) {
      this.setState((prevState) => ({
        activePlayer: prevState.activePlayer === activePlayerIndex ? -1 : activePlayerIndex
      }));
    }

    render() {
      const {activePlayerId} = this.state;

      return (
        <Component
          {...this.props}
          renderAudioPlayer={(src, id) => (
            <AudioPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={() => this.handleAudioPlayerButtonClick(id)}
            />
          )}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
