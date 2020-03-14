import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';

class GuessGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: 0,
      playerAnswers: [false, false, false, false],
    };

    this.handleAudioPlayerButtonClick = this.handleAudioPlayerButtonClick.bind(this);
  }

  handleAnswerChange(event, answerIndex) {
    const isChecked = event.target.checked;

    this.setState((prevState) => ({
      playerAnswers: [
        ...prevState.playerAnswers.slice(0, answerIndex),
        isChecked,
        ...prevState.playerAnswers.slice(answerIndex + 1)
      ],
    }));
  }

  handleSubmit(event, question) {
    event.preventDefault();

    this.props.onAnswer(question, this.state.playerAnswers);
  }

  handleAudioPlayerButtonClick(activePlayerIndex) {
    this.setState((prevState) => ({
      activePlayer: prevState.activePlayer === activePlayerIndex ? -1 : activePlayerIndex
    }));
  }

  render() {
    const {playerAnswers, activePlayer} = this.state;
    const {question} = this.props;
    const {genre, answers} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>

        <form
          className="game__tracks"
          onSubmit={(event) => this.handleSubmit(event, question)}
        >
          {answers.map((answer, i) => (
            <div key={`${i}-${answer.song}`} className="track">
              <AudioPlayer
                src={answer.song}
                isPlaying={i === activePlayer}
                onPlayButtonClick={() => this.handleAudioPlayerButtonClick(i)}
              />

              <div className="game__answer">
                <input
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${i}`}
                  id={`answer-${i}`}
                  checked={playerAnswers[i]}
                  onChange={(event) => this.handleAnswerChange(event, i)}
                />

                <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
              </div>
            </div>
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GuessGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      song: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default GuessGenreScreen;
