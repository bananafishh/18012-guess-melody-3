import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from './welcome-screen.jsx';

configure({adapter: new Adapter()});

const ERRORS_COUNT_MAX = 3;

it(`При клике по кнопке запуска игры должен быть вызван коллбэк`, () => {
  const handleStartGameButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCountMax={ERRORS_COUNT_MAX}
        onStartGameButtonClick={handleStartGameButtonClick}
      />
  );

  const startGameButton = welcomeScreen.find(`.welcome__button`);

  startGameButton.props().onClick();

  expect(handleStartGameButtonClick.mock.calls.length).toBe(1);
});

