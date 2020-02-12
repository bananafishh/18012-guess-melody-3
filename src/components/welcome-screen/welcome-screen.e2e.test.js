import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from './welcome-screen';

Enzyme.configure({
  adapter: new Adapter()
});

const ERRORS_COUNT_MAX = 3;

it(`При клике по кнопке запуска игры должен быть вызван коллбэк`, () => {
  const startGameButtonClickHandler = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={ERRORS_COUNT_MAX}
        onStartGameButtonClick={startGameButtonClickHandler}
      />
  );

  const startGameButton = welcomeScreen.find(`.welcome__button`);

  startGameButton.props().onClick();

  expect(startGameButtonClickHandler.mock.calls.length).toBe(1);
});

