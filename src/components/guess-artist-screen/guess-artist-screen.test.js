import React from 'react';
import renderer from 'react-test-renderer';

import GuessArtistScreen from './guess-artist-screen.jsx';

const question = {
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
};

it(`Компонент GuessArtistScreen рендерится корректно`, () => {
  const tree = renderer
    .create(<GuessArtistScreen
      question={question}
      onAnswer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
