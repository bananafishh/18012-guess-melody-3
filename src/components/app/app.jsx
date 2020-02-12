import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const startGameButtonClickHandler = () => {};

const App = (props) => {
  const {errorsCount} = props;

  return (
    <WelcomeScreen
      errorsCount={errorsCount}
      onStartGameButtonClick={startGameButtonClickHandler}
    />
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired
};

export default App;
