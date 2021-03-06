import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GuessGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      playerAnswers: [false, false, false, false],
    };
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

  render() {
    const {
      question,
      renderAudioPlayer,
    } = this.props;

    const {
      genre,
      answers,
    } = question;

    const {playerAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>

        <form
          className="game__tracks"
          onSubmit={(event) => this.handleSubmit(event, question)}
        >
          {answers.map((answer, i) => (
            <div key={`${i}-${answer.song}`} className="track">
              {renderAudioPlayer(answer.song, i)}

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
  renderAudioPlayer: PropTypes.func.isRequired,
};

export default GuessGenreScreen;
