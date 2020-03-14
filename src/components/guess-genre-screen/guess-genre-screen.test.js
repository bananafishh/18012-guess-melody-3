import React from 'react';
import renderer from 'react-test-renderer';

import GuessGenreScreen from './guess-genre-screen.jsx';

const question = {
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
};

it(`Компонент GuessGenreScreen рендерится корректно`, () => {
  const tree = renderer
    .create(
        <GuessGenreScreen
          question={question}
          onAnswer={() => {}}
          renderAudioPlayer={() => {}}
        />,
        {createNodeMock: () => ({})}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
