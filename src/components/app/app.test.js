import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const ERRORS_COUNT_MAX = 3;

it(`Компонент App должен отрендериться корректно`, () => {
  const tree = renderer
    .create(<App errorsCount={ERRORS_COUNT_MAX}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
