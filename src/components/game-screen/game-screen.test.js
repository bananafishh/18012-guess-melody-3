import React from 'react';
import renderer from 'react-test-renderer';

import {GameType} from '../../constants.js';
import {GameScreen} from './game-screen.jsx';

const children = <div className="children-component" />;

describe(`Компонент «GameScreen» рендерится корректно`, () => {
  it(`Для игрового экрана «Угадай исполнителя»`, () => {
    const tree = renderer
      .create(
          <GameScreen
            type={GameType.GUESS_ARTIST}
            errorsCount={3}
          >
            {children}
          </GameScreen>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Для игрового экрана «Угадай жанр»`, () => {
    const tree = renderer
      .create(
          <GameScreen
            type={GameType.GUESS_GENRE}
            errorsCount={3}
          >
            {children}
          </GameScreen>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
