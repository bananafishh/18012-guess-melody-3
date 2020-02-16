import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessSingerScreen from '../guess-singer-screen/guess-singer-screen.jsx';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen.jsx';

const startGameButtonClickHandler = () => {};

const App = (props) => {
  const {errorsCount, questions} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorsCount={errorsCount}
            onStartGameButtonClick={startGameButtonClickHandler}
          />
        </Route>

        <Route exact path="/guess-singer">
          <GuessSingerScreen question={questions[0]}/>
        </Route>

        <Route exact path="/guess-genre">
          <GuessGenreScreen/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
