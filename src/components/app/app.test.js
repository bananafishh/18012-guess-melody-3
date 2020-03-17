import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const questions = [
  {
    type: `artist`,
    song: {
      artist: `X Ambassadors`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        artist: `X Ambassadors`,
        picture: `https://api.adorable.io/avatars/128/1`,
      },
      {
        artist: `Bastille`,
        picture: `https://api.adorable.io/avatars/128/2`,
      },
      {
        artist: `Imagine Dragons`,
        picture: `https://api.adorable.io/avatars/128/3`,
      },
    ],
  },
  {
    type: `genre`,
    genre: `инди-рок`,
    answers: [
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `инди-рок`,
      },
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `рок`,
      },
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `джаз`,
      },
      {
        song: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `фолк`,
      },
    ],
  },
];

describe(`Компонент App рендерится корректно`, () => {
  it(`Приветственный экран рендерится корректно`, () => {
    const tree = renderer
      .create(
          <App
            errorsCount={3}
            questions={questions}
            step={-1}
            onStartGameButtonClick={() => {}}
            onGameQuestionAnswer={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Экран «Угадай исполнителя» рендерится корректно`, () => {
    const tree = renderer
      .create(
          <App
            errorsCount={3}
            questions={questions}
            step={0}
            onStartGameButtonClick={() => {}}
            onGameQuestionAnswer={() => {}}
          />,
          {createNodeMock: () => ({})}
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Экран «Угадай жанр» рендерится корректно`, () => {
    const tree = renderer
      .create(
          <App
            errorsCount={3}
            questions={questions}
            step={1}
            onStartGameButtonClick={() => {}}
            onGameQuestionAnswer={() => {}}
          />,
          {createNodeMock: () => ({})}
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

