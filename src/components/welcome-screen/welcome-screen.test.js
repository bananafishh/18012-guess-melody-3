import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen.jsx';

const ERRORS_COUNT_MAX = 3;

it(`Компонент WelcomeScreen должен отрендериться корректно`, () => {
  const tree = renderer
    .create(<WelcomeScreen errorsCount={ERRORS_COUNT_MAX}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
