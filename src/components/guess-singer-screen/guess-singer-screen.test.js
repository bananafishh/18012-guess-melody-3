import React from 'react';
import renderer from 'react-test-renderer';

import GuessSingerScreen from './guess-singer-screen.jsx';

const question = {
  type: `singer`,
  song: {
    singer: `X Ambassadors`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      singer: `X Ambassadors`,
      picture: `https://api.adorable.io/avatars/128/1`,
    },
    {
      singer: `Bastille`,
      picture: `https://api.adorable.io/avatars/128/2`,
    },
    {
      singer: `Imagine Dragons`,
      picture: `https://api.adorable.io/avatars/128/3`,
    },
  ],
};

it(`Компонент GuessSingerScreen рендерится корректно`, () => {
  const tree = renderer
    .create(<GuessSingerScreen
      question={question}
      onAnswer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
