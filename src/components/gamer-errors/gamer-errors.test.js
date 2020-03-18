import React from 'react';
import renderer from 'react-test-renderer';

import GamerErrors from './gamer-errors';

describe(`Компонент «GamerErrors» рендерится корректно`, () => {
  it(`Если игрок не совершил ошибок`, () => {
    const tree = renderer
      .create(
          <GamerErrors count={0}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Если игрок совершил 3 ошибки`, () => {
    const tree = renderer
      .create(
          <GamerErrors count={3}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

