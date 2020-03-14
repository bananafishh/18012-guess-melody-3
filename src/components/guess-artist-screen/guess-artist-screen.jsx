import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';

class GuessArtistScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isTrackPlaying: true,
    };

    this.handleAudioPlayerButtonClick = this.handleAudioPlayerButtonClick.bind(this);
  }

  handleAudioPlayerButtonClick() {
    this.setState((prevState) => ({isTrackPlaying: !prevState.isTrackPlaying}));
  }

  render() {
    const {question, onAnswer} = this.props;
    const {song, answers} = question;
    const {isTrackPlaying} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>

        <div className="game__track">
          <div className="track">
            <AudioPlayer
              src={song.src}
              isPlaying={isTrackPlaying}
              onPlayButtonClick={this.handleAudioPlayerButtonClick}
            />
          </div>
        </div>

        <form className="game__artist">
          {answers.map((answer, i) => (
            <div key={answer.artist} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                value={`artist-${i}`}
                id={`answer-${i}`}
                onChange={() => onAnswer(question, answer)}
              />

              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    );
  }
}

GuessArtistScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default GuessArtistScreen;
