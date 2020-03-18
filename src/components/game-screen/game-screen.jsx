import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {GameType} from '../../constants.js';

import GamerErrors from '../gamer-errors/gamer-errors.jsx';

const GameScreen = (props) => {
  const {
    type,
    children,
    errorsCount,
  } = props;

  return (
    <section className={`game game--${type}`}>
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

        <GamerErrors count={errorsCount}/>
      </header>

      {children}
    </section>
  );
};

GameScreen.propTypes = {
  type: PropTypes.oneOf([
    GameType.GUESS_ARTIST,
    GameType.GUESS_GENRE,
  ]).isRequired,
  children: PropTypes.node.isRequired,
  errorsCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  errorsCount: state.errorsCount,
});

export {GameScreen};
export default connect(mapStateToProps)(GameScreen);
