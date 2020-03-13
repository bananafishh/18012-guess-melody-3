import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {GameType} from '../../constants.js';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this.handleStartGameButtonClick = this.handleStartGameButtonClick.bind(this);
    this.handleGuessArtistAnswer = this.handleGuessArtistAnswer.bind(this);
    this.handleGuessGenreAnswer = this.handleGuessGenreAnswer.bind(this);
  }

  handleStartGameButtonClick() {
    this.setState({step: 0});
  }

  handleGuessArtistAnswer() {
    this.setState((prevState) => ({step: prevState.step + 1}));
  }

  handleGuessGenreAnswer() {
    this.setState((prevState) => ({step: prevState.step + 1}));
  }

  showGameScreen() {
    const {errorsCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errorsCount={errorsCount}
          onStartGameButtonClick={this.handleStartGameButtonClick}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.GUESS_ARTIST:
          return (
            <GuessArtistScreen
              question={question}
              onAnswer={this.handleGuessArtistAnswer}
            />
          );

        case GameType.GUESS_GENRE:
          return (
            <GuessGenreScreen
              question={question}
              onAnswer={this.handleGuessGenreAnswer}
            />
          );

        default:
          // no default
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.showGameScreen()}
          </Route>

          <Route exact path="/guess-artist">
            <GuessArtistScreen
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>

          <Route exact path="/guess-genre">
            <GuessGenreScreen
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
