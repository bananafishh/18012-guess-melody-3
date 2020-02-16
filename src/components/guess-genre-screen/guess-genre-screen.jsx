import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class GuessGenreScreen extends PureComponent {
  render() {
    const {question} = this.props;
    const {genre, answers} = question;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle
              className="timer__line"
              cx="390"
              cy="390"
              r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`,
              }}
            />
          </svg>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>

          <form className="game__tracks">
            {answers.map((answer, i) => (
              <div key={`${i}-${answer.song}`} className="track">
                <button className="track__button track__button--play" type="button"></button>

                <div className="track__status">
                  <audio src={answer.song}/>
                </div>

                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                  />

                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            ))}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GuessGenreScreen.propTypes = {
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      song: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default GuessGenreScreen;
